import AppBar from "./appBar/AppBar";
import Footer from "./Footer";

import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout = ({ sidebar, children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen h-5">
      <AppBar />
      <div className="flex flex-1 border-x border-black divide-x divide-black">
        {sidebar}
        <main className="flex flex-1 flex-col overflow-auto bg-(--color-bg-secondary) ">
          {children}
        </main>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
