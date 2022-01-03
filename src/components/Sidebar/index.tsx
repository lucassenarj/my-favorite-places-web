import React from "react";
import About from "../About";
import Footer from "../Footer";
import MiniPlace from "../MiniPlace";
import User from "../User";
import styles from "./index.module.css";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <User id="lucas-sena" name="Lucas Sena" />
      <section>
        <div className={styles.mini_posts}>
          <MiniPlace />
          <MiniPlace />
          <MiniPlace />
          <MiniPlace />
        </div>
      </section>
      <About />
      <Footer />
    </section>
  );
}

export default Sidebar;
