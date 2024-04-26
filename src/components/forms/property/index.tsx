import { Button, Form, Input, Select, Space, message } from "antd";
import { DollarOutlined, SendOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@stores";

import styles from "../login/styles.module.scss";

type FormPropertyProps = {
  price_from?: string;
  price_to?: string;
  location?: string;
  realty?: string;
  amount?: string;
  rent?: string;
};

const FormPropertyComponent = () => {
  const { countriesStore } = useStore();
  const { fetchCountries, countries, isLoadingCountries } = countriesStore;

  const isLoading = isLoadingCountries;

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
            style={{ fontFamily: "Lexend" }}
            prefix={<DollarOutlined />}
            placeholder="from"
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
          size="middle"
          loading={isLoading}
          options={optionsLocation}
          placeholder="Enter Location"
          style={{ fontFamily: "Lexend", width: "100%" }}
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
          type="primary"
          htmlType="submit"
          icon={<SendOutlined />}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexFlow: "row-reverse",
            justifyContent: "center",
            gap: 10,
          }}
        >
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export const FormProperty = observer(FormPropertyComponent);
