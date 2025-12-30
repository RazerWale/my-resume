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
  const [currentFolder, setCurrentFolder] = useState<FileNode>(defaultPage);
  const [fileTabs, setFileTabs] = useState<string[]>([defaultPage.fileName]);

  const handleFileSelect = (file: FileNode) => {
    setCurrentFolder(file);
    setFileTabs((prev) => [...prev, file.fileName]);
  };
  return (
    <Layout sidebar={<Sidebar onFileSelect={handleFileSelect} />}>
      <div className="text-(--color-text-grey)">
        <FileTab tabs={fileTabs} />
        <FilePath target={currentFolder} folders={folders[0]} />
        <Editor content={currentFolder} />
      </div>
    </Layout>
  );
}

export default App;
