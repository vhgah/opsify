import { CookieBanner } from "./CookieBanner";
import { NewsroomSidebar } from "./NewsroomSidebar";
import { SiteFooter } from "./SiteFooter";
import { TemplatesGrid } from "./TemplatesGrid";

export function TemplatesPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <main className="flex flex-1 flex-col" style={{ paddingTop: "120.859px" }}>
        <div className="flex w-full">
          <NewsroomSidebar />

          <div className="flex-1 px-6 py-12 lg:px-8">
            <div className="mx-auto w-full max-w-[1100px]">
              <div className="rounded-[4px] border border-[#3c7be1] bg-white px-4 py-3 text-center text-[14.4px] font-bold text-[#3c7be1]">
                We are updating the template library. Check back often for new
                template releases.
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-[22.4px] font-semibold leading-[28.6541px] text-[var(--gp-text)]">
                  Template Library
                </div>
                <a
                  href="/pro-access"
                  className="hidden rounded-[6.4px] border border-[var(--gp-border)] bg-white px-[17.28px] py-[14.4px] text-[14.4px] font-semibold text-[var(--gp-text)] md:block"
                >
                  Pro Member Access
                </a>
              </div>

              <p className="mt-4 max-w-[680px] text-[14.4px] leading-[22.896px] text-[var(--gp-text)]">
                A growing library of premium templates for Squarespace – from
                non-branded layouts for a clean slate, to pre-branded layouts for a
                quick design head start.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-[12.8px] font-semibold text-[var(--gp-text)]">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-black" />
                  Boo
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3c7be1]" />
                  Cool
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1f7a3a]" />
                  Forest
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#111]" />
                  Night
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#bdbdbd]" />
                  Neutral
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e0593e]" />
                  Warm
                </span>
              </div>

              <TemplatesGrid />
            </div>
          </div>
        </div>

        <SiteFooter />
      </main>

      <CookieBanner />
    </div>
  );
}

