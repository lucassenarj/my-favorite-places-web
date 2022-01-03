import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">{children}</div>
      <Sidebar />
    </div>
  );
}

export default Layout;
