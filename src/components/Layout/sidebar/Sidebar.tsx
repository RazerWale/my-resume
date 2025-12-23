import type { OnFileSelect } from "../../../types/editor";
import SidebarControls from "./SidebarControls";
import SidebarFolders from "./SidebarFolders";

interface SidebarProps {
  onFileSelect: OnFileSelect;
}

const Sidebar = ({ onFileSelect }: SidebarProps) => {
  return (
    <div className="bg-(--color-bg) ">
      <SidebarControls />
      <SidebarFolders onFileSelect={onFileSelect} />
    </div>
  );
};

export default Sidebar;
