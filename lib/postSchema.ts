import type { Post } from './blog'

const SITE_URL = 'https://opsify.art'
const SITE_NAME = 'Opsify'

function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractSection(markdown: string, headingRegex: RegExp): { heading: string; index: number }[] {
  const headings: { heading: string; index: number }[] = []
  let match: RegExpExecArray | null
  const re = new RegExp(headingRegex, headingRegex.flags.includes('g') ? headingRegex.flags : headingRegex.flags + 'g')
  while ((match = re.exec(markdown))) {
    headings.push({ heading: match[1].trim(), index: match.index })
  }
  return headings
}

function sliceBetween(markdown: string, start: number, end: number): string {
  const headingLineEnd = markdown.indexOf('\n', start)
  const contentStart = headingLineEnd === -1 ? start : headingLineEnd + 1
  return markdown.slice(contentStart, end).trim()
}

function extractFaqEntries(markdown: string): { question: string; answer: string }[] {
  const faqHeadingMatch = /^##\s+FAQ.*$/m.exec(markdown)
  if (!faqHeadingMatch) return []

  const faqStart = faqHeadingMatch.index
  const nextH2 = /^##\s+.+$/gm
  nextH2.lastIndex = faqStart + faqHeadingMatch[0].length
  const nextH2Match = nextH2.exec(markdown)
  const faqEnd = nextH2Match ? nextH2Match.index : markdown.length
  const faqSection = markdown.slice(faqStart, faqEnd)

  const questions = extractSection(faqSection, /^###\s+(.+)$/gm)
  return questions.map((q, i) => {
    const end = i + 1 < questions.length ? questions[i + 1].index : faqSection.length
    const answer = stripMarkdown(sliceBetween(faqSection, q.index, end)).slice(0, 1000)
    return { question: q.heading, answer }
  })
}

function extractHowToSteps(markdown: string): { name: string; text: string }[] {
  const steps = extractSection(markdown, /^##\s+Step\s+\d+[:.]?\s*(.+)$/gm)
  if (!steps.length) return []

  return steps.map((s, i) => {
    const end = i + 1 < steps.length ? steps[i + 1].index : markdown.length
    const text = stripMarkdown(sliceBetween(markdown, s.index, end)).slice(0, 600)
    return { name: s.heading, text }
  })
}

export function buildJsonLd(post: Post): Record<string, unknown> {
  const url = `${SITE_URL}/blog/${post.slug}`

  const base: Record<string, unknown> = {
    '@type': post.schemaType,
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    datePublished: post.pubDatetime,
    dateModified: post.modDatetime ?? post.pubDatetime,
    mainEntityOfPage: url,
    url,
  }
  if (post.ogImage) base.image = post.ogImage

  if (post.schemaType === 'HowTo') {
    const steps = extractHowToSteps(post.content)
    if (steps.length) {
      base.step = steps.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
    }
  }

  const faqs = extractFaqEntries(post.content)
  const faqSchema = faqs.length
    ? {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  if (post.schemaType === 'FAQPage') {
    return { '@context': 'https://schema.org', ...base, ...(faqSchema ?? {}) }
  }

  if (faqSchema) {
    return { '@context': 'https://schema.org', '@graph': [base, faqSchema] }
  }

  return { '@context': 'https://schema.org', ...base }
}
