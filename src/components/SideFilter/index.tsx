import { Input, Select, Button, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@stores";

import styles from "./styles.module.scss";

const SideFilterComponent = () => {
  const { countriesStore } = useStore();
  const { fetchCountries, countries, isLoading } = countriesStore;

  useEffect(() => {
    fetchCountries();
  }, []);

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return (
    <div className={styles.container}>
      <h1>
        <FilterOutlined style={{ fontSize: 35 }} />
        Filters
      </h1>
      <div className={styles.price}>
        <h4>Price</h4>
        <Space.Compact>
          <Input placeholder="from" style={{ fontFamily: "Lexend" }} />
          <Input placeholder="to" style={{ fontFamily: "Lexend" }} />
        </Space.Compact>
      </div>
      <div className={styles.rent}>
        <h4>Type of Rent</h4>
        <Select
          style={{ fontFamily: "Lexend", width: "100%" }}
          defaultValue={""}
          options={[
            { value: "buy", label: "Buy" },
            { value: "rent", label: "Rent" },
            { value: "", label: "All" },
          ]}
        ></Select>
      </div>
      <div className={styles.realty}>
        <h4>Type of Realty</h4>
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
      </div>
      <div className={styles.location}>
        <h4>Location</h4>
        <Select
          showSearch
          loading={isLoading}
          options={optionsLocation}
          style={{ fontFamily: "Lexend", width: "100%" }}
          placeholder="Enter Location"
          size="middle"
        ></Select>
      </div>
      <div className={styles.rooms}>
        <h4>Amount rooms</h4>
        <Select
          style={{ fontFamily: "Lexend", width: "100%" }}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4+" },
          ]}
        ></Select>
      </div>
      <Button type="primary">Save</Button>
    </div>
  );
};

export const SideFilter = observer(SideFilterComponent);
