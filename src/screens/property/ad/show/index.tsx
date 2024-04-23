"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Image from "next/image";
import { Button, message } from "antd";
import {
  PictureOutlined,
  SettingOutlined,
  DeleteOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { AntdProvider, UserCard } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

const ShowAdComponent = () => {
  const router = useRouter();
  const { userStore } = useStore();
  const { showCard, card, user, cardDelete } = userStore;

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) showCard({ id: Number(id) });
  }, []);

  const isYour = card.user?.id === user?.id;

  const handlerEdit = () => {
    showCard({ id: Number(id) });

    router.push(`/property/ad/edit?id=${id}`);
  };

  const handlerDelete = () => {
    cardDelete({ id: Number(id) });

    router.push(`/profile/my_property`);
    message.success("delete successfully");
  };

  return (
    <div className={styles.display}>
      <AntdProvider>
        <div className={styles.page}>
          <div className={styles.page_box}>
            {card.image ? (
              <div className={styles.page_box_image}>
                <Image
                  width={200}
                  height={200}
                  src={card.image}
                  alt={card.title}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Lexend",
                  margin: 200,
                  width: "max-content",
                }}
                className={styles.card_photo}
              >
                <PictureOutlined style={{ fontSize: 100, color: "#888b97" }} />
              </div>
            )}
            <div className={styles.page_box_description}>
              <h3>Description</h3>
              {card.description}
            </div>
          </div>
          <div className={styles.page_info}>
            <div className={`${styles.page_info_title} ${styles.bottom}`}>
              <h1 className={styles.price}>$ {card.price}</h1>
              <h1 className={styles.title}>{card.title}</h1>
              <div>
                <div className={styles.location}>
                  {card.location}; {card.street}
                </div>
                {/* <div className={styles.data}>12 Apr., 09:23</div> */}
              </div>
            </div>
            <div className={styles.page_info_container}>
              <div>
                <div className={styles.rent}>
                  <label>Type of Rent ...................... </label>
                  {card.rent}
                </div>
                <div className={styles.realty}>
                  <label>Type of Realty ...................... </label>
                  {card.realty}
                </div>
              </div>
              {card?.user?.phone && (
                <div className={styles.contact}>
                  <PhoneOutlined />
                  <div>
                    <h3>Phone Numbers in the Ad</h3>
                    {card.user.phone}
                  </div>
                </div>
              )}

              <div className={styles.user}>
                <UserCard user={card.user} />
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
                    onClick={handlerEdit}
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
                    type="primary"
                    onClick={handlerDelete}
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
