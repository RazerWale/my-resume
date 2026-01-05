import type { FileNode } from "../../../data/folders";

type FileTabProps = {
  tabs: FileNode[];
  onFileClose: (file: FileNode) => void;
  onFileSelect: (file: FileNode) => void;
  currentFile: FileNode;
};

const FileTab = ({
  tabs,
  onFileClose,
  onFileSelect,
  currentFile,
}: FileTabProps) => {
  return (
    <div className="flex flex-row cursor-pointer">
      {tabs.map((file) => {
        const isOpen = currentFile.fileName === file.fileName;
        return (
          <div
            className={`flex items-center px-2 border-black border-r group border-b bg-(--color-bg) ${
              isOpen
                ? "border-b-0 border-t border-t-amber-700 bg-(--color-bg-secondary) "
                : ""
            }`}
            key={file.fileName}
            onClick={() => {
              onFileSelect(file);
            }}
          >
            {file.fileName}
            <button
              className="cursor-pointer ml-1 px-1 items-center opacity-0 group-hover:opacity-100 hover:bg-white/10 "
              aria-label="close"
              onClick={(e) => {
                e.stopPropagation();
                onFileClose(file);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FileTab;
