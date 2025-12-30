import "./index.css";
import Layout from "./components/layout/Layout";
import Editor from "./components/layout/editor/Editor";
import Sidebar from "./components/layout/sidebar/Sidebar";
import FilePath from "./components/layout/editor/FilePath";
import FileTab from "./components/layout/editor/FileTab";
import { useState } from "react";
import { folders, type FileNode } from "./data/folders";

function App() {
  const [currentFolder, setCurrentFolder] = useState<FileNode>();

  const handleFileSelect = (file: FileNode) => {
    setCurrentFolder(file);
  };
  return (
    <Layout sidebar={<Sidebar onFileSelect={handleFileSelect} />}>
      <div className="text-(--color-text-grey)">
        <FileTab file={currentFolder} />
        <FilePath target={currentFolder} folders={folders[0]} />
        <Editor content={currentFolder} />
      </div>
    </Layout>
  );
}

export default App;
