import React from "react";
import style from "./sidebar.module.scss";
const Sidebar = () => {
  const links = [
    {
      id: 1,
      url: "../../images/Man.svg",
      title: "iconMan",
      href: "#",
    },
    {
      id: 2,
      url: "../../images/Download.svg",
      title: "iconDownload",
      href: "#",
    },
    { id: 3, url: "../../images/ZIP.svg", title: "iconZip", href: "#" },
    { id: 4, url: "../../images/Image.svg", title: "iconImage", href: "#" },
    { id: 5, url: "../../images/Task.svg", title: "iconTask", href: "#" },
    { id: 6, url: "../../images/Fire.svg", title: "iconFire", href: "#" },
    { id: 7, url: "../../images/Diagram.svg", title: "iconDiagram", href: "#" },
  ];

  const renderIcons = () => {
    return links.map((link) => {
      const iconStyle = style[link.title];
      return (
        <li key={link.id}>
          <a href={link.href}>
            <div className={`${iconStyle} ${style.icon}`}></div>
          </a>
          {/* <img className={style.icon} src={link.url} alt={link.title}/> */}
        </li>
      );
    });
  };
  return (
    <div className={style.sidebar}>
      <div className={style.logoCover}>
        <div className={style.logo}></div>
        {/* <div className={style.line}></div> */}
      </div>
      <ul className={style.icons}>{renderIcons()}</ul>
      <div className={`${style.gear} ${style.icon}`}></div>
    </div>
  );
};

export default Sidebar;
