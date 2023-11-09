import Link from "next/link";
import React from "react";
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div>
      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=styles"
          className={`${styles.categoryItem} ${styles.style} `}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=styles"
          className={`${styles.categoryItem} ${styles.travel} `}
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=styles"
          className={`${styles.categoryItem} ${styles.fashion} `}
        >
          Fashion
        </Link>
        <Link
          href="/blog?cat=styles"
          className={`${styles.categoryItem} ${styles.food} `}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=styles"
          className={`${styles.categoryItem} ${styles.culture} `}
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=styles"
          className={`${styles.categoryItem} ${styles.coding} `}
        >
          Coding
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
