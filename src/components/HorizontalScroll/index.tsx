import { CSSProperties, forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: JSX.Element[];
  style?: CSSProperties;
};

export const HorizontalScroll = forwardRef<HTMLDivElement, Props>(({ style, children }, ref) => {
  return (
    <div ref={ref} style={style} className={styles.wrapper}>
      {children}
    </div>
  );
});
