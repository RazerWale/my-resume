import type { FileNode } from "../../../data/folders";
import SidebarControls from "./SidebarControls";
import SidebarFolders from "./SidebarFolders";
type SidebarProps = {
  currentFile: FileNode | null;
  onFileSelect: (file: FileNode) => void;
};

const Sidebar = ({ currentFile, onFileSelect }: SidebarProps) => {
  return (
    <div className="max-w-50 h-full resize-x overflow-auto bg-(--color-bg) text-(--color-text-white)">
      <SidebarControls />
      <SidebarFolders onFileSelect={onFileSelect} currentFile={currentFile} />
    </div>
  );
};

export default Sidebar;
