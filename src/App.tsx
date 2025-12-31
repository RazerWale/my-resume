import "./index.css";
import Layout from "./components/layout/Layout";
import Editor from "./components/layout/editor/Editor";
import Sidebar from "./components/layout/sidebar/Sidebar";
import FilePath from "./components/layout/editor/FilePath";
import FileTab from "./components/layout/editor/FileTab";
import { useState } from "react";
import { folders, type FileNode } from "./data/folders";
import { defaultPage } from "./data/folders";

function App() {
  const [currentFile, setCurrentFile] = useState<FileNode>(defaultPage);
  const [fileTabs, setFileTabs] = useState<FileNode[]>([defaultPage]);

  const handleFileSelect = (file: FileNode) => {
    setCurrentFile(file);
    setFileTabs((prev) => (prev.includes(file) ? prev : [...prev, file]));
  };

  const handleFileClose = (file: FileNode) => {
    setFileTabs((prev) => prev.filter((tab) => tab.fileName !== file.fileName));
  };

  return (
    <Layout sidebar={<Sidebar onFileSelect={handleFileSelect} />}>
      <div className="text-(--color-text-grey)">
        <FileTab
          tabs={fileTabs}
          onFileClose={handleFileClose}
          onFileSelect={handleFileSelect}
        />

        <FilePath target={currentFile} folders={folders[0]} />
        <Editor content={currentFile} />
      </div>
    </Layout>
  );
}

export default App;
