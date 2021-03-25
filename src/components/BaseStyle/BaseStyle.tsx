import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface BaseProps {}

const BaseStyle = ({ children }: PropsWithChildren<BaseProps>) => {
  return <div className={styles.base}>{children}</div>;
};

export default BaseStyle;
