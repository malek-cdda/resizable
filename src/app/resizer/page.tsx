import React from "react";
import style from "./style.module.css";
const Home = () => {
  return (
    <div>
      <div className={style.resizable}>
        <div className={style.resizers}>
          <div className={`${style.resizer} ${style.topLeft}`}></div>
          <div className={`${style.resizer} ${style.topRight}`}></div>
          <div className={`${style.resizer} ${style.bottomLeft}`}></div>
          <div className={`${style.resizer} ${style.bottomRight}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
