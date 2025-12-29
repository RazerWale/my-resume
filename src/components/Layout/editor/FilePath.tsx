import { findPath } from "../../../utils/findPath";
import type { FileNode, FolderNode } from "../../../data/folders";

interface FilePathProps {
  target: FileNode | null;
  folders: FolderNode;
}

const FilePath = ({ target, folders }: FilePathProps) => {
  const filePath = target ? findPath(folders, target.fileName) : null;

  return (
    <div className="pl-2">
      {filePath ? filePath.join(" > ") : "choose file"}
    </div>
  );
};

export default FilePath;
