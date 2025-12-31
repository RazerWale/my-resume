import type { FileNode } from "../../../data/folders";

type FileTabProps = {
  tabs: FileNode[];
  onFileClose: (file: FileNode) => void;
  onFileSelect: (file: FileNode) => void;
};

const FileTab = ({ tabs, onFileClose, onFileSelect }: FileTabProps) => {
  return (
    <div className="flex flex-row cursor-pointer">
      {tabs.map((file) => {
        return (
          <div
            className="flex items-center px-2 border-black border group"
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
