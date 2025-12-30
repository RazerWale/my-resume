import type { FileNode } from "../../../data/folders";
import { defaultPage } from "../../../data/folders";

const FileTab = ({ file = defaultPage }: { file?: FileNode }) => {
  return <div>{file?.fileName}</div>;
};

export default FileTab;
