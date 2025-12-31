import { useState, useRef, useLayoutEffect } from "react";
import type { FileNode } from "../../../data/folders";

const Editor = ({ content }: { content?: FileNode }) => {
  const refNode = useRef<HTMLDivElement>(null);
  const refCloneNode = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(0);
  const [refCloneWidth, setRefCloneWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    //calculates current clone width
    const ref = refNode.current;
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
    // calculates number of lines based
    const ref = refCloneNode.current;
    // console.log(refCloneWidth);

    if (!ref) return;
    const calculateLines = () => {
      const style = window.getComputedStyle(ref); // gets all the applied css from the ref element
      const lineHeight = parseInt(style.lineHeight); // sets line height from css element that was parsed to numbers from strings
      const nodeHeight = ref.scrollHeight; // set height based on the height of clone ref element
      const lines = Math.round(nodeHeight / lineHeight); // devide ref element height to single line height
      setLineCount(lines); // set amount of lanes to the state
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
    <div className="flex relative ">
      <div className="px-8 ">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="whitespace-pre-wrap " ref={refNode}>
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
