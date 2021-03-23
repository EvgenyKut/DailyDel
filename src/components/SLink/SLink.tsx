import React from "react";
import { Link } from "react-router-dom";
import style from "./slink.module.scss";

type LinkProps = {
  path?: string;
  label: string;
  // style: string;
};

const SLink: React.FC<LinkProps> = ({ path, label}) => {

  return (
    <Link to={`${path}`} className={style.main}>
      {label}
    </Link>
  );
};

export default SLink;
