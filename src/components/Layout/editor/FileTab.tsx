const FileTab = ({ tabs }: { tabs: string[] }) => {
  return (
    <div className="flex flex-row ">
      {tabs.map((name) => {
        return (
          <div className="px-2 border-black border" key={name}>
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default FileTab;
