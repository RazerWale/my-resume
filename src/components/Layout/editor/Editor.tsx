import { useState, useRef, useEffect } from "react";
import type { FileNode } from "../../../data/folders";

const Editor = ({ content }: { content: FileNode | null }) => {
  const refNode = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const ref = refNode.current;
    if (!ref) return;

    const calculateLines = () => {
      const style = window.getComputedStyle(ref);
      const lineHeight = parseInt(style.lineHeight);
      const nodeHeight = ref.scrollHeight;
      const lines = Math.ceil(nodeHeight / lineHeight);
      setLineCount(lines);
      console.log(lines);
      console.log(nodeHeight);
    };

    calculateLines();

    const observer = new ResizeObserver(() => {
      calculateLines();
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [content]);

  if (!content) return null;

  return (
    <div className="flex">
      <div className="pr-5">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="whitespace-pre-wrap" ref={refNode}>
        {content.content}
      </div>
    </div>
  );
};

export default Editor;
