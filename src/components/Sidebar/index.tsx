import React from "react";
import IUser from "../../types/user";
import About from "../About";
import Footer from "../Footer";
import User from "../User";
import styles from "./index.module.css";

type Props = {
  user: IUser;
};

function Sidebar({ user }: Props) {
  return (
    <section className={styles.sidebar}>
      <User {...user} />
      <About />
      <Footer />
    </section>
  );
}

export default Sidebar;
