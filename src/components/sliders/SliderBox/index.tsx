"use client";

import { CSSProperties, ReactNode, useRef } from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "@stores";

import { HorizontalScroll } from "../../HorizontalScroll";
import { SvgSwitcher } from "../../SvgSwitcher";
import { Button } from "../../buttons";

import styles from "./styles.module.scss";
import { AntdProvider } from "@/components/AntdProvider";

type SliderProps = {
  children: ReactNode;
  header: string;
  top: string;

  bttns?: { name: string }[];
  style?: CSSProperties;
};

const SliderComponent = ({
  children,
  header,
  bttns,
  style,
  top,
}: SliderProps) => {
  const { buttonStore } = useStore();
  const { bttnType, setBttnType } = buttonStore;

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handlerSearch = (type: string) => {
    setBttnType(type);
  };

  const handlerPrev = () => {
    const cardWidth = 500;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= cardWidth;
    }
  };

  const handlerNext = () => {
    const cardWidth = 500;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.position}>
        <div className={styles.center}>
          <div className={`${styles.slider_top}`}>
            <span>{top}</span>
          </div>
          <div className={styles.slider_header}>
            <h2>{header}</h2>

            <AntdProvider>
              <div className={styles.slider_header_bttns}>
                {bttns &&
                  bttns.map(({ name }) => {
                    return (
                      <Button
                        isActive={bttnType === name ? true : false}
                        onClick={() => handlerSearch(name)}
                        variant={"secondary"}
                        key={name}
                      >
                        <SvgSwitcher variant={name.toLowerCase()} />
                        {name}
                      </Button>
                    );
                  })}
              </div>
            </AntdProvider>
            <div className={styles.slider_header_arrows}>
              <Button
                onClick={handlerPrev}
                style={{ transform: "rotate(180deg)" }}
                variant={"arrow"}
              >
                <SvgSwitcher variant={"arrow"} />
              </Button>
              <Button onClick={handlerNext} variant={"arrow"}>
                <SvgSwitcher variant={"arrow"} />
              </Button>
            </div>
          </div>
        </div>

        <HorizontalScroll ref={sliderRef} style={style}>
          {children}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export const SliderBox = observer(SliderComponent);
