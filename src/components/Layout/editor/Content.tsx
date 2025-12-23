import { About } from "../../../data/content";
import { Skills } from "../../../data/content";

interface ContentProps {
  content: React.ReactNode;
}

const Content = ({ content }: ContentProps) => {
  return <div>{content}</div>;
};

export default Content;
