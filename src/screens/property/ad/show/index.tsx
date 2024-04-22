"use client";

import { useSearchParams } from "next/navigation";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { Button } from "antd";
import {
  SettingOutlined,
  DeleteOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { AntdProvider, UserCard } from "@components";
import { cards, compositionInfo } from "@screens/home/config";

import styles from "./styles.module.scss";

const ShowAdComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const findObjectById = (objects: any[], id: string | null): any | null => {
    for (let obj of objects) {
      if (obj.id === Number(id)) {
        return obj;
      }
    }
    return null;
  };

  const foundObject = findObjectById(cards, id);

  const isYour = id; // дописать

  return (
    <div className={styles.display}>
      <AntdProvider>
        <div className={styles.page}>
          <div className={styles.page_box}>
            <div className={styles.page_box_image}>
              <Image src={foundObject.image} alt={foundObject.title} />
            </div>
            <div className={styles.bottom}>
              <h3>Specifications</h3>
              {compositionInfo.map(({ name, amount }) => {
                return (
                  <div className={styles.item}>
                    <label>
                      Amount {name.toLowerCase()} ......................{" "}
                    </label>
                    {amount}
                  </div>
                );
              })}
            </div>
            <div className={styles.page_box_description}>
              <h3>Description</h3>
              {foundObject.description}
            </div>
          </div>
          <div className={styles.page_info}>
            <div className={`${styles.page_info_title} ${styles.bottom}`}>
              <h1 className={styles.price}>{foundObject.price}</h1>
              <h1 className={styles.title}>{foundObject.title}</h1>
              <div>
                <div className={styles.location}>
                  {foundObject.location}; {foundObject.street}
                </div>
                <div className={styles.data}>12 Apr., 09:23</div>
              </div>
            </div>
            <div className={styles.page_info_container}>
              <div>
                <div className={styles.rent}>
                  <label>Type of Rent ...................... </label>
                  {foundObject.rent}
                </div>
                <div className={styles.realty}>
                  <label>Type of Realty ...................... </label>
                  {foundObject.realty}
                </div>
              </div>
              <div className={styles.contact}>
                <PhoneOutlined />
                <div>
                  <h3>Phone Numbers in the Ad</h3>
                  {foundObject.user.phone}
                </div>
              </div>

              <div className={styles.user}>
                <UserCard user={foundObject.user} />
              </div>
              {isYour && (
                <div className={styles.actions}>
                  <Button
                    icon={<SettingOutlined />}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      gap: 8,
                      fontFamily: "Lexend",
                    }}
                    type="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    icon={<DeleteOutlined />}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      gap: 8,
                      fontFamily: "Lexend",
                    }}
                    danger
                    // type="primary"
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </AntdProvider>
    </div>
  );
};

export const ShowAd = observer(ShowAdComponent);
