import React from "react";
import style from "./sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logoCover}>
        <div className={style.logo}></div>
        <div className={style.line}></div>
      </div>
      <div className={style.icons}>
        <div className={`${style.iconMan} ${style.icon}`}></div>
        <div className={`${style.iconDownload} ${style.icon}`}></div>
        <div className={`${style.iconZip} ${style.icon}`}></div>
        <div className={`${style.iconImage} ${style.icon}`}></div>
        <div className={`${style.iconTask} ${style.icon}`}></div>
        <div className={`${style.iconFire} ${style.icon}`}></div>
        <div className={`${style.iconDiagram} ${style.icon}`}></div>
      </div>
      <div className={`${style.gear} ${style.icon}`}></div>
    </div>
  );
};

export default Sidebar;
