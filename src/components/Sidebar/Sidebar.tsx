import React, { PropsWithChildren } from "react";
import style from "./sidebar.module.scss";
import man from "../../images/Man.svg";
import download from "../../images/Download.svg";
import zip from "../../images/ZIP.svg";
import image from "../../images/Image.svg";
import task from "../../images/Task.svg";
import fire from "../../images/Fire.svg";
import diagram from "../../images/Diagram.svg";

interface BaseProps {}
const Sidebar = ({ children }: PropsWithChildren<BaseProps>) => {
  const links = [
    {
      id: 1,
      image: man,
      title: "iconMan",
      href: "/login",
    },
    {
      id: 2,
      image: download,
      title: "iconDownload",
      href: "/test2",
    },
    { id: 3, image: zip, title: "iconZip", href: "/test" },
    { id: 4, image: image, title: "iconImage", href: "#" },
    { id: 5, image: task, title: "iconTask", href: "#" },
    { id: 6, image: fire, title: "iconFire", href: "#" },
    { id: 7, image: diagram, title: "iconDiagram", href: "#" },
  ];

  const renderIcons = () => {
    return links.map((link) => {
      return (
        <li key={link.id}>
          <a href={link.href}>
            <div
              className={style.icon}
              style={{ backgroundImage: `url(${link.image})` }}
            ></div>
          </a>
        </li>
      );
    });
  };
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div>
          {/* <div className={style.logoCover}> */}
            <div className={style.logo}></div>
            <div className={style.line}></div>
          {/* </div> */}
          <ul className={style.icons}>{renderIcons()}</ul>
          <div className={`${style.gear} ${style.icon}`}></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
