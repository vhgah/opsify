import { AnnouncementBar } from "@/components/ghostplugins/AnnouncementBar";
import { SiteHeader } from "@/components/ghostplugins/SiteHeader";
import { ToolboxPage } from "@/components/ghostplugins/ToolboxPage";

export default function Toolbox() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="fixed left-0 top-0 z-40 w-full">
        <AnnouncementBar />
        <SiteHeader />
      </div>
      <ToolboxPage />
    </div>
  );
}

