import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import navItems from "../../helpers/navItems";
import styles from "./index.module.css";

function Menu({ display }: { display: boolean }) {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <section
      className={[styles.menu, display ? styles.is_menu_visible : ""].join(" ")}
    >
      <section>
        <nav className={styles.hide}>
          <ul>
            <li>
              <a className="fa-bars" href="#">
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <ul className={styles.links}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <a>
                  <p>{item.text}</p>
                </a>
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <Link href="/logout">
                <a>
                  <p>Logout</p>
                </a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>
                    <p>Login</p>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>
                    <p>Register</p>
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </section>
  );
}

export default Menu;
