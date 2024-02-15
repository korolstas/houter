import { compositionInfo } from "@pages/home/config";
import { SvgSwitcher } from "../SvgSwitcher";
import styles from "./styles.module.scss";
import { UserCard } from "../UserCard";
import { StaticImageData } from "next/image";

interface CompositionProps {
  descrioption: string;
  user: {
    image: StaticImageData;
    location: string;
    work: string;
    name: string;
  };
  header: string;
  top: string;
}

export const Composition = ({
  descrioption,
  header,
  user,
  top,
}: CompositionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <div className={styles.desc_top}>
          <span>{top}</span>
        </div>
        <div className={styles.desc_margin}>
          <h2>{header}</h2>
          <h4>{descrioption}</h4>
          <div className={styles.desc_detail}>
            <span className={styles.desc_detail_header}>House Detail</span>
            <div className={styles.desc_detail_items}>
              {compositionInfo.map(({ name, amount }) => {
                return (
                  <div className={styles.desc_detail_items_item}>
                    <SvgSwitcher variant={name.toLowerCase()} />
                    <label>
                      {amount} {amount > 1 ? `${name}s` : name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <UserCard isWho={true} isContactNow={true} size={56} user={user} />
        </div>
      </div>
      <div className={styles.img_content}></div>
    </div>
  );
};
