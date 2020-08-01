import React from "react";
import styles from "./CategoriesFilter.module.css";
import config from "./config";
import * as count from "./services";

const CategoriesFilter = () => {
  console.log("count", count.default.countCar);
  return (
    <section className={`${styles.wrapper} container`}>
      <ul className={styles.ul} className={styles.flex}>
        {config.map(({ name, svg }) => {
          return (
            <li key={name} className={`${styles.flex} ${styles.li}`}>
              <button
                onClick={() => {
                  console.log("123", 123);
                }}
                className={styles.btn}
              >
                <p className={`${styles.prise}`}>total</p>
                <div className={styles.svg}>{svg}</div>
                <p className={styles.name}>{name}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoriesFilter;
