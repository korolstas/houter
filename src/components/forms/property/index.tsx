import { useRouter, useSearchParams } from "next/navigation";
import { Button, Form, Input, Select, Space } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@stores";

import styles from "../login/styles.module.scss";

type FormPropertyProps = {
  start_price?: string;
  end_price?: string;
  location?: string;
  realty?: string;
  rent?: string;
};

const FormPropertyComponent = () => {
  const router = useRouter();
  const { countriesStore } = useStore();
  const { fetchCountries, countries, isLoadingCountries } = countriesStore;
  const searchParams = useSearchParams();
  const start_price = searchParams.get("start_price");
  const end_price = searchParams.get("end_price");
  const location = searchParams.get("location");
  const realty = searchParams.get("realty");
  const rent = searchParams.get("rent");

  const isLoading = isLoadingCountries;

  useEffect(() => {
    fetchCountries();
  }, []);

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const onFinish = (data: FormPropertyProps) => {
    const params = new URLSearchParams();

    if (data.location) params.append("location", data.location);
    if (data.start_price) params.append("start_price", data.start_price);
    if (data.end_price) params.append("end_price", data.end_price);
    if (data.realty) params.append("realty", data.realty);
    if (data.rent) params.append("rent", data.rent);

    const queryString = params.toString();
    router.push(`/property?${queryString}`);
  };

  const initialValues = {
    start_price,
    end_price,
    location,
    realty,
    rent,
  };

  return (
    <Form
      initialValues={initialValues}
      className={styles.form}
      onFinish={onFinish}
    >
      <div className={styles.placeholder}>
        <label>Price</label>
      </div>

      <Space.Compact>
        <Form.Item className={styles.form_item} name="start_price">
          <Input
            style={{ fontFamily: "Lexend" }}
            prefix={<DollarOutlined />}
            placeholder="from"
          />
        </Form.Item>

        <Form.Item className={styles.form_item} name="end_price">
          <Input placeholder="to" style={{ fontFamily: "Lexend" }} />
        </Form.Item>
      </Space.Compact>

      <div className={styles.placeholder}>
        <label>Type of Rent</label>
      </div>

      <Form.Item className={styles.form_item} name="rent">
        <Select
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

      <Form.Item className={styles.form_item} name="realty">
        <Select
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

      {/* <div className={styles.placeholder}>
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
      </Form.Item> */}

      <Form.Item className={styles.form_item}>
        <Button
          type="primary"
          htmlType="submit"
          // icon={<SendOutlined />}
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
