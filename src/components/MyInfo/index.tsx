import React from "react";
import IUser from "../../types/user";
import About from "../About";
import Footer from "../Footer";
import MiniPlace from "../MiniPlace";
import Unregistered from "../Unregistered";
import User from "../User";
import styles from "./index.module.css";

type Props = {
  isAuthenticated: boolean;
  user?: IUser | null;
};

function MyInfo(props: Props) {
  return (
    <section className={styles.sidebar}>
      {!props.isAuthenticated && <Unregistered />}
      {props.user && (
        <>
          <User {...props.user} />
          <section>
            <div className={styles.mini_posts}>
              {props.user.places?.map((place, index) => (
                <MiniPlace key={index} {...place} />
              ))}
            </div>
          </section>
        </>
      )}
      <About />
      <Footer />
    </section>
  );
}

export default MyInfo;
