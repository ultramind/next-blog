"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const isAuth = false;
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      {isAuth ? (
        <div className={styles.container}>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <Link href="/logout" className={styles.link}>
            Logout
          </Link>
        </div>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/logout">Logout</Link>
          {isAuth ? (
            <>
              <Link href="/write">Write</Link>
              <Link href="/logout">Logout</Link>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
