import "./index.css";
import Layout from "./components/layout/Layout";
import Editor from "./components/layout/editor/Editor";
import Sidebar from "./components/layout/sidebar/Sidebar";
import { useState } from "react";
import type { FileNode } from "./data/folders";

function App() {
  const [currentFolder, setCurrentFolder] = useState<FileNode | null>(null);

  const handleFileSelect = (file: FileNode) => {
    setCurrentFolder(file);
  };
  return (
    <Layout sidebar={<Sidebar onFileSelect={handleFileSelect} />}>
      <Editor content={currentFolder} />
    </Layout>
  );
}

export default App;
