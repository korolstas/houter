import { FilterOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";

import { FormProperty } from "../forms";

import styles from "./styles.module.scss";

const SideFilterComponent = () => {
  return (
    <div className={styles.container}>
      <h1>
        <FilterOutlined style={{ fontSize: 35 }} />
        Filters
      </h1>
      <FormProperty />
    </div>
  );
};

export const SideFilter = observer(SideFilterComponent);
