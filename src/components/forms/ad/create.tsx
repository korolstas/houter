"use client";

import { Button, DatePicker, Form, Input, Select, Upload, message } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import {
  CheckOutlined,
  CloseOutlined,
  DollarOutlined,
  FormOutlined,
  MailOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { AntdProvider } from "@components";
import { useStore } from "@stores";

import styles from "../login/styles.module.scss";

type FormCreateAdProps = {
  price: number;
  title: string;
  realty: string;
  rent: string;
  location: string | null;
  street?: string;
  specifications?: {
    bathroom?: number;
    bedroom?: number;
    Carport?: number;
    floor?: number;
  };
  description?: string;
};

const FormCreateAdComponent = () => {
  const { userStore, countriesStore } = useStore();
  const { user, createCard } = userStore;
  const { fetchCountries, countries, isLoading } = countriesStore;

  useEffect(() => {
    if (!countries) fetchCountries();
  }, []);

  const onFinish = (data: FormCreateAdProps) => {
    createCard(data);

    message.success("Account uploaded successfully");
  };

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return (
    <AntdProvider>
      <Form className={styles.form} onFinish={onFinish}>
        <div className={styles.avatar}>
          <div className={styles.avatar_box}>
            <Form.Item>
              <Upload>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
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

export const FormCreateAd = observer(FormCreateAdComponent);
