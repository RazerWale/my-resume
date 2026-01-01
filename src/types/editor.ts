import type { FileNode } from "../data/folders";

export type OnFileSelect = (file: FileNode) => void;
export type OnFileClose = (file: string) => void;
export type CurrentFileProps = {
  onFileSelect: OnFileSelect;
  currentFileProps: FileNode;
};
