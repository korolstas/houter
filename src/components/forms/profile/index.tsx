import {
  Button,
  DatePicker,
  Form,
  GetProp,
  Input,
  Select,
  Upload,
  UploadProps,
  message,
} from "antd";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import dayjs from "dayjs";
import {
  CheckOutlined,
  CloseOutlined,
  FormOutlined,
  MailOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { AntdProvider, AvatarUpload } from "@components";
import { useStore } from "@stores";
import styles from "../login/styles.module.scss";

type FormProfile = {
  // id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  img?: string | null;
  birthday?: string | null;
  location?: string | null;
  phone?: string | null;
};

const FormProfileComponent = () => {
  const router = useRouter();
  const { userStore, countriesStore } = useStore();
  const { setUser, user } = userStore;
  const { fetchCountries, countries, isLoading } = countriesStore;
  const [isDisabled, setIsDisabled] = useState(true);
  const [prevInitialValues, setPrevInitialValues] = useState<FormProfile>({
    email: user?.email || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    birthday: "",
    location: "",
    phone: "",
  });
  const [initialValues, setInitialValues] = useState<FormProfile>({
    email: user?.email || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    birthday: user?.birthday,
    location: user?.location,
    phone: user?.phone,
  });

  const editHandler = () => {
    if (isDisabled) {
      fetchCountries();
      setPrevInitialValues(initialValues);
    } else setInitialValues(prevInitialValues);
    setIsDisabled(!isDisabled);
  };

  const onFinish = (data: FormProfile) => {
    // console.log(21212, data);
    // setUser({
    // email: user?.email,
    // firstName: user?.firstName,
    // lastName: user?.lastName,
    // birthday: user?.birthday,
    // location: user?.location,
    // });
    // router.push("/", { scroll: false });
    message.success("Account uploaded successfully");
  };

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const optionsPhone = countries
    .reduce((acc, current) => {
      const x = acc.find(
        (item: { dial_code: string }) => item.dial_code === current.dial_code
      );
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, [])
    .map((item: { dial_code: string }) => ({
      value: item.dial_code,
      label: item.dial_code,
    }));

  const disabledDate = (current: dayjs.Dayjs) =>
    current && current.isAfter(dayjs(), "day");

  return (
    <AntdProvider>
      <Form
        initialValues={initialValues}
        className={styles.form}
        onFinish={onFinish}
      >
        <div className={styles.avatar}>
          <div className={styles.avatar_box}>
            <AvatarUpload isDisabled={isDisabled} imgUrl={user?.imgUrl} />
            <div className={styles.avatar_box_input}>
              <div>
                <div className={styles.placeholder}>
                  <label>Firstname*</label>
                </div>
                <Form.Item
                  className={styles.form_item}
                  name="firstName"
                  rules={[
                    { required: true, message: "This field should be filled" },
                    {
                      pattern: /^[A-Z]{2,16}$/i,
                      message: "This field should be filled",
                    },
                  ]}
                >
                  <Input
                    disabled={isDisabled}
                    placeholder="Enter Firstname"
                    size="middle"
                    prefix={<UserOutlined style={{ paddingRight: "5px" }} />}
                  />
                </Form.Item>
              </div>

              <div>
                <div className={styles.placeholder}>
                  <label>Lastname*</label>
                </div>

                <Form.Item
                  className={styles.form_item}
                  name="lastName"
                  rules={[
                    { required: true, message: "This field should be filled" },
                    {
                      pattern: /^[A-Z]{2,16}$/i,
                      message: "This field should be filled",
                    },
                  ]}
                >
                  <Input
                    disabled={isDisabled}
                    placeholder="Enter Lastname"
                    size="middle"
                    prefix={<UserOutlined style={{ paddingRight: "5px" }} />}
                  />
                </Form.Item>
              </div>
            </div>
          </div>

          <div className={styles.placeholder}>
            <label>Email*</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="email"
            rules={[
              { required: true, message: "This field should be filled" },
              {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email format",
              },
            ]}
          >
            <Input
              disabled={isDisabled}
              placeholder="Enter Email"
              size="middle"
              prefix={<MailOutlined style={{ paddingRight: "5px" }} />}
            />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Phone</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="phone"
            rules={[
              {
                pattern: /^\d+$/i,
                message: "Invalid phone format",
              },
            ]}
          >
            <Input
              disabled={isDisabled}
              placeholder="Enter Phone"
              size="middle"
              addonBefore={
                <Select
                  showSearch
                  loading={isLoading}
                  style={{ fontFamily: "Lexend" }}
                  disabled={isDisabled}
                  defaultValue={"+xxx"}
                  options={optionsPhone}
                />
              }
            />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>Birthday</label>
          </div>

          <Form.Item className={styles.form_item} name="birthday">
            <DatePicker
              disabledDate={disabledDate}
              className={styles.date}
              disabled={isDisabled}
              placeholder="Enter Birthday"
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
              disabled={isDisabled}
              options={optionsLocation}
              style={{ fontFamily: "Lexend" }}
              placeholder="Enter Location"
              size="middle"
            />
          </Form.Item>

          {isDisabled ? (
            <Button
              type="primary"
              onClick={editHandler}
              icon={<FormOutlined />}
              className={styles.button}
            >
              Edit Profile
            </Button>
          ) : (
            <div style={{ display: "flex", gap: "10px" }}>
              <Form.Item style={{ display: "flex", gap: "10px" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<CheckOutlined />}
                  className={styles.button}
                >
                  Save
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={editHandler}
                  icon={<CloseOutlined />}
                  className={styles.button}
                >
                  Cancel
                </Button>
              </Form.Item>
            </div>
          )}
        </div>
      </Form>
    </AntdProvider>
  );
};

export const FormProfile = observer(FormProfileComponent);
