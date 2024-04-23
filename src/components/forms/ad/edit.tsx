"use client";

import { Button, Form, Image, Input, Select, message } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import {
  CheckOutlined,
  DollarOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { AntdProvider } from "@components";
import { useStore } from "@stores";

import styles from "../login/styles.module.scss";
import { useRouter } from "next/navigation";

type FormCreateAdProps = {
  price: number;
  title: string;
  realty: string;
  rent: string;
  location: string | null;
  description?: string;
};

const FormEditAdComponent = ({ id }: { id?: string | null }) => {
  const router = useRouter();
  const { userStore, countriesStore } = useStore();
  const { cardUpload, card } = userStore;
  const { fetchCountries, countries, isLoading } = countriesStore;

  useEffect(() => {
    if (!countries) fetchCountries();
  }, [card, isLoading]);

  console.log("car12123212d", card);

  const onFinish = (data: FormCreateAdProps) => {
    cardUpload(selectedFile, { id: Number(id), ...data });
    message.success("Uploaded successfully");
    router.push(`/property/ad/show?id=${id}`);
  };

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const [selectedFile, setSelectedFile] = useState<FormData | null>(null);

  const onImageClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = () => {
      if (fileInput.files) {
        const form = new FormData();
        form.append("file", fileInput.files[0]);
        setSelectedFile(form);
      }
    };
    fileInput.click();
  };

  const initialValues = {
    price: card?.price,
    title: card?.title,
    realty: card?.realty,
    rent: card?.rent,
    location: card?.location,
    description: card?.description,
  };

  return (
    <AntdProvider>
      <Form
        initialValues={initialValues}
        className={styles.form}
        onFinish={onFinish}
      >
        <div className={styles.avatar}>
          <div className={styles.avatar_box}>
            <Image width={200} src={card.image}></Image>
            <Button
              style={{ display: "flex", alignItems: "center", gap: 10 }}
              onClick={onImageClick}
              icon={<UploadOutlined />}
            >
              Click to Upload
            </Button>
            {selectedFile && "upload success"}
          </div>

          <div className={styles.placeholder}>
            <label>Title</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="title"
            rules={[{ required: true, message: "This field should be filled" }]}
          >
            <Input placeholder="Enter Title" size="middle" />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Price</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="price"
            rules={[{ required: true, message: "This field should be filled" }]}
          >
            <Input
              prefix={<DollarOutlined />}
              placeholder="Enter Price"
              size="middle"
            />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Location</label>
          </div>

          <Form.Item className={styles.form_item} name="location">
            <Select
              showSearch
              loading={isLoading}
              options={optionsLocation}
              style={{ fontFamily: "Lexend" }}
              placeholder="Enter Location"
              size="middle"
            />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Type of Rent</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="rent"
            rules={[{ required: true, message: "This field should be filled" }]}
          >
            <Select
              placeholder="Enter type"
              style={{ fontFamily: "Lexend", width: "100%" }}
              options={[
                { value: "buy", label: "Buy" },
                { value: "rent", label: "Rent" },
              ]}
            ></Select>
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Type of Realty</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="realty"
            rules={[{ required: true, message: "This field should be filled" }]}
          >
            <Select
              placeholder="Enter type"
              style={{ fontFamily: "Lexend", width: "100%" }}
              options={[
                { value: "house", label: "House" },
                { value: "villa", label: "Villa" },
                { value: "apartment", label: "Apartment" },
              ]}
              size="middle"
            ></Select>
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Description</label>
          </div>

          <Form.Item className={styles.form_item} name="description">
            <Input.TextArea size="middle" />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Specifications</label>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Item style={{ display: "flex", gap: "10px" }}>
              <Button
                type="primary"
                htmlType="submit"
                icon={<CheckOutlined />}
                className={styles.button}
              >
                Create an Ad
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </AntdProvider>
  );
};

export const FormEditAd = observer(FormEditAdComponent);
