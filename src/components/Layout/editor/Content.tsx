interface ContentProps {
  content: React.ReactNode;
}

const Content = ({ content }: ContentProps) => {
  return <div>{content}</div>;
};

export default Content;
