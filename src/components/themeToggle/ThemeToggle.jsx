"use client";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/contex/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div onClick={toggle} className={styles.container}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <span
        className={styles.ball}
        style={
          theme !== "dark"
            ? { background: "white", right: "3px" }
            : { background: "#0f172a", left: "3px" }
        }
      ></span>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
