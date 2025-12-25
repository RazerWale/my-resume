import { useState, useRef, useLayoutEffect } from "react";
import type { FileNode } from "../../../data/folders";

const Editor = ({ content }: { content: FileNode | null }) => {
  const refNode = useRef<HTMLDivElement>(null);
  const refCloneNode = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(0);
  const [refCloneWidth, setRefCloneWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ref = refCloneNode.current;
    if (!ref) return;

    const updateWidth = () => {
      setRefCloneWidth(ref.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const ref = refCloneNode.current;
    if (!ref) return;
    const calculateLines = () => {
      const style = window.getComputedStyle(ref);
      const lineHeight = parseInt(style.lineHeight);
      const nodeHeight = ref.scrollHeight;
      const lines = Math.ceil(nodeHeight / lineHeight);
      setLineCount(lines);
    };

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
    <div className="flex relative">
      <div className="pr-5">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="whitespace-pre-wrap pl-8" ref={refNode}>
        {content.content}
      </div>
      <div
        className="whitespace-pre-wrap invisible absolute"
        ref={refCloneNode}
        style={{
          width: refCloneWidth || "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        {content.content}
      </div>
    </div>
  );
};

export default Editor;
