import Image from "next/image";
import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ultra here!</b> Discoever my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            harum ducimus totam repudiandae quas fugit numquam enim error.
            Quisquam, neque cupiditate eius aperiam sunt explicabo veritatis,
            dignissimos error, libero aspernatur amet qui perspiciatis omnis?
            Itaque eaque vitae voluptatum dicta earum!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
