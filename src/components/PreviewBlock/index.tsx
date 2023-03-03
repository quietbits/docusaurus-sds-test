import React from "react";
import styles from "./styles.module.css";

export const PreviewBlock = ({ children }: { children: React.ReactNode }) => {
  const themeStyles = (theme: "light" | "dark") =>
    [styles.theme, `sds-theme-${theme}`].join(" ");

  return (
    <div className={styles.container}>
      <div className={themeStyles("light")}>{children}</div>
      <div className={themeStyles("dark")}>{children}</div>
    </div>
  );
};
