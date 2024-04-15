import Link from "next/link";
import {
  FacebookOutlined,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons";

import styles from "./styles.module.scss";

import { SvgSwitcher } from "../SvgSwitcher";

const info = [
  {
    name: "Property",
    links: ["House", "Apartment", "Villa"],
  },
  {
    name: "Article",
    links: ["New Article", "Popular Article", "Most Read", "Tips & Tricks"],
  },
  {
    name: "Contact",
    contacts: [
      "2464 Royal Ln. Mesa, New Jersey 45463",
      "(671) 555-0110",
      "info@hounter.com",
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo}>
        <SvgSwitcher variant={"logo"} />
        <div className={styles.footer_logo_text}>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </div>
        <div className={styles.footer_logo_pictures}>
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramFilled />
        </div>
      </div>
      <div className={styles.footer_info}>
        {info.map(({ name, links, contacts }) => {
          return (
            <div key={name} className={styles.footer_info_box}>
              <label>{name}</label>
              <div className={styles.footer_info_box_items}>
                {links &&
                  links.map((item) => (
                    <Link key={item} className={styles.item} href="/">
                      {item}
                    </Link>
                  ))}
                {contacts &&
                  contacts.map((item) => (
                    <div key={item} className={styles.item}>
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
