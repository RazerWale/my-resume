import type { Node } from "../data/folders";

type FileNode = Extract<Node, { type: "file" }>;

type FolderViewProps = {
  node: Node;
  currentFile: FileNode | null;
  onFileSelect: (file: FileNode) => void;
};

const FolderView: React.FC<FolderViewProps> = ({
  node,
  onFileSelect,
  currentFile,
}: FolderViewProps) => {
  //base case
  if (node.type === "file") {
    return (
      <div
        onClick={() => onFileSelect(node)}
        key={node.fileName}
        className="pl-8 cursor-pointer hover:bg-white/10 transition-colors truncate"
      >
        {node.fileName}
      </div>
    );
  }
  //recursive case
  return (
    <div>
      <div>{node.folderName}</div>
      {node.children && node.children.length > 0 && (
        <div className="">
          {node.children.map((child) => (
            <FolderView
              key={
                child.type === "file"
                  ? `${child.fileName}`
                  : `${child.folderName}`
              }
              node={child}
              onFileSelect={onFileSelect}
              currentFile={currentFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderView;
