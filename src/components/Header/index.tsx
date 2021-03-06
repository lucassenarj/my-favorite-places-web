import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import navItems from "../../helpers/navItems";
import styles from "./index.module.css";

type IHeader = {
  handleOnClick: any;
};

function Header({ handleOnClick }: IHeader): JSX.Element {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a>Favorite Places</a>
        </Link>
      </h1>
      <nav className={styles.links}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <nav className={styles.main}>
        <ul>
          <li className={styles.menu}>
            <a className="fa-bars" href="#" onClick={handleOnClick}>
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
