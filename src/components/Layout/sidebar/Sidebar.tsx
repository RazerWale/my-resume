import type { OnFileSelect } from "../../../types/editor";
import SidebarControls from "./SidebarControls";
import SidebarFolders from "./SidebarFolders";

interface SidebarProps {
  onFileSelect: OnFileSelect;
}

const Sidebar = ({ onFileSelect }: SidebarProps) => {
  return (
    <div className="max-w-50 h-full resize-x overflow-auto bg-(--color-bg) text-(--color-text-white)">
      <SidebarControls />
      <SidebarFolders onFileSelect={onFileSelect} />
    </div>
  );
};

export default Sidebar;
