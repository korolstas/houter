import styles from "./styles.module.scss";

type SliderPicture = {
  children: JSX.Element;
};

export const SliderPictureByOne = ({ children }: SliderPicture) => {
  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.slider}>{children}</div>
      <div className={styles.slider_nav}>
        <a href="#slider-1"></a>
        <a href="#slider-2"></a>
        <a href="#slider-3"></a>
      </div>

      SOON...
    </div>
  );
};
