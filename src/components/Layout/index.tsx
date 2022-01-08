import React, { useState } from "react";
import Header from "../Header";
import Menu from "../Menu";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(!display);
  }

  return (
    <div className="wrapper">
      <Header handleOnClick={handleDisplay} />
      <div onClick={handleDisplay}>
        <Menu display={display} />
      </div>
      {children}
    </div>
  );
}

export default Layout;
