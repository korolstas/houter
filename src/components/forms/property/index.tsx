import { Button, Form, Input, Select, Space, message } from "antd";
import { DollarOutlined, SendOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@stores";

import styles from "../login/styles.module.scss";

type FormPropertyProps = {
  price_from?: string;
  price_to?: string;
  rent?: string;
  realty?: string;
  location?: string;
  amount?: string;
};

const FormPropertyComponent = () => {
  const { countriesStore } = useStore();
  const { fetchCountries, countries, isLoading } = countriesStore;

  useEffect(() => {
    fetchCountries();
  }, []);

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const onFinish = (data: FormPropertyProps) => {
    message.success("Account uploaded successfully");
  };

  return (
    <Form className={styles.form} onFinish={onFinish}>
      <div className={styles.placeholder}>
        <label>Price</label>
      </div>

      <Space.Compact>
        <Form.Item className={styles.form_item} name="price_from">
          <Input
            prefix={<DollarOutlined />}
            placeholder="from"
            style={{ fontFamily: "Lexend" }}
          />
        </Form.Item>

        <Form.Item className={styles.form_item} name="price_to">
          <Input placeholder="to" style={{ fontFamily: "Lexend" }} />
        </Form.Item>
      </Space.Compact>

      <div className={styles.placeholder}>
        <label>Type of Rent</label>
      </div>

      <Form.Item className={styles.form_item} name="rent">
        <Select
          style={{ fontFamily: "Lexend", width: "100%" }}
          defaultValue={""}
          options={[
            { value: "buy", label: "Buy" },
            { value: "rent", label: "Rent" },
            { value: "", label: "All" },
          ]}
        ></Select>
      </Form.Item>

      <div className={styles.placeholder}>
        <label>Type of Realty</label>
      </div>

      <Form.Item className={styles.form_item} name="realty">
        <Select
          style={{ fontFamily: "Lexend", width: "100%" }}
          defaultValue="all"
          options={[
            { value: "house", label: "House" },
            { value: "villa", label: "Villa" },
            { value: "apartment", label: "Apartment" },
            { value: "all", label: "All Properties" },
          ]}
          size="middle"
        ></Select>
      </Form.Item>

      <div className={styles.placeholder}>
        <label>Location</label>
      </div>

      <Form.Item className={styles.form_item} name="location">
        <Select
          showSearch
          loading={isLoading}
          options={optionsLocation}
          style={{ fontFamily: "Lexend", width: "100%" }}
          placeholder="Enter Location"
          size="middle"
        ></Select>
      </Form.Item>

      <div className={styles.placeholder}>
        <label>Amount rooms</label>
      </div>

      <Form.Item className={styles.form_item} name="amount">
        <Select
          style={{ fontFamily: "Lexend", width: "100%" }}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4+" },
          ]}
          placeholder="Enter an amount rooms"
        ></Select>
      </Form.Item>

      <Form.Item className={styles.form_item}>
        <Button
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "row-reverse",
            gap: 10,
          }}
          type="primary"
          htmlType="submit"
          icon={<SendOutlined />}
        >
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export const FormProperty = observer(FormPropertyComponent);
