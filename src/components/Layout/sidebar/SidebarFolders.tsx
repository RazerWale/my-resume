import { folders } from "../../../data/folders";
import FolderView from "../../../utils/FolderView";
import type { FileNode } from "../../../data/folders";

type SidebarFoldersProps = {
  currentFile: FileNode | null;
  onFileSelect: (file: FileNode) => void;
};

const SideBarFolders = ({ onFileSelect, currentFile }: SidebarFoldersProps) => {
  return (
    <div className="p-1">
      {folders.map((folder) => (
        <div>
          <FolderView
            onFileSelect={onFileSelect}
            node={folder}
            currentFile={currentFile}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBarFolders;
