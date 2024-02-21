import { CSSProperties, ReactNode, forwardRef } from "react";

import styles from "./styles.module.scss";

type HorizontalScrollProps = {
  children: ReactNode[];
  style?: CSSProperties;
};

export const HorizontalScroll = forwardRef<
  HTMLDivElement,
  HorizontalScrollProps
>(({ style, children }, ref) => {
  return (
    <div ref={ref} style={style} className={styles.wrapper}>
      {children}
    </div>
  );
});
