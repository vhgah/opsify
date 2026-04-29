import { AnnouncementBar } from "@/components/ghostplugins/AnnouncementBar";
import { SiteHeader } from "@/components/ghostplugins/SiteHeader";
import { TemplatesPage } from "@/components/ghostplugins/TemplatesPage";

export default function Templates() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="fixed left-0 top-0 z-40 w-full">
        <AnnouncementBar />
        <SiteHeader />
      </div>
      <TemplatesPage />
    </div>
  );
}

