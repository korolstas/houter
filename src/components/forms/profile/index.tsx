"use client";

import { Tooltip, message, Button, Select, Input, Form } from "antd";
import { QuestionCircleOutlined, MailOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { AntdProvider, UserCard } from "@components";
import { useStore } from "@stores";

import styles from "./styles.module.scss";

type FormProfile = {
  id: string | number;
  email: string;
  lastName: string;
  firstName: string;
  img?: string | null;
  work?: string | null;
  phone?: string | null;
  location?: string | null;
};

const FormProfileComponent = () => {
  const { userStore, countriesStore } = useStore();
  const { fetchCountries, countries, isLoadingCountries } = countriesStore;
  const { user, updateUser, isLoadingUser } = userStore;

  const isLoading = isLoadingUser || isLoadingCountries;

  useEffect(() => {
    if (!countries) fetchCountries();
  }, []);

  const onFinish = (data: FormProfile) => {
    updateUser({
      id: user.id,
      work: data.work,
      phone: data.phone,
      location: data.location,
      lastName: data.lastName,
      firstName: data.firstName,
    });

    message.success("Account uploaded successfully");
  };

  const optionsLocation = countries.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    location: user?.location,
    phone: user?.phone,
    email: user?.email,
    work: user?.work,
  };

  return (
    <AntdProvider>
      <Form
        initialValues={initialValues}
        className={styles.form}
        onFinish={onFinish}
      >
        <div className={`${styles.box} ${styles.data}`}>
          <h1>Profile data</h1>

          <div className={styles.placeholder}>
            <label>Phone number</label>
          </div>

          <Form.Item
            name="phone"
            rules={[
              {
                pattern: /^\d+$/i,
                message: "Invalid phone format",
              },
            ]}
          >
            <Input placeholder="Enter Phone" size="large" />
          </Form.Item>

          <div className={styles.placeholder}>
            <label>E-mail*</label>
          </div>

          <Form.Item
            className={styles.form_item}
            name="email"
            rules={[
              { required: true, message: "This field should be filled" },
              {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid e-mail format",
              },
            ]}
          >
            <Input
              disabled
              size="large"
              placeholder="Enter E-mail"
              prefix={<MailOutlined style={{ paddingRight: "5px" }} />}
              suffix={
                <Tooltip title="You specified this e-mail address during registration, it cannot be changed">
                  <QuestionCircleOutlined
                    style={{ color: "rgba(0,0,0,.45)" }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
        </div>

        <div className={`${styles.box} ${styles.profile}`}>
          <div style={{ marginBottom: 20 }}>
            {user && <UserCard size={45} user={user} />}
          </div>

          <div className={styles.profile_items}>
            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Firstname*</label>
              </div>

              <Form.Item
                name="firstName"
                className={styles.item}
                rules={[
                  { required: true, message: "This field should be filled" },
                  {
                    pattern: /^[A-Z]{2,16}$/i,
                    message: "This field should be filled",
                  },
                ]}
              >
                <Input placeholder="Enter Firstname" size="large" />
              </Form.Item>
            </div>

            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Lastname*</label>
              </div>

              <Form.Item
                name="lastName"
                className={styles.item}
                rules={[
                  { required: true, message: "This field should be filled" },
                  {
                    pattern: /^[A-Z]{2,16}$/i,
                    message: "This field should be filled",
                  },
                ]}
              >
                <Input placeholder="Enter Lastname" size="large" />
              </Form.Item>
            </div>
          </div>

          {/* <Form.Item name="birthday">
                <DatePicker
                  disabledDate={disabledDate}
                  className={styles.item}
                  placeholder="Enter Birthday"
                  size="large"
                />
                <label className={styles.descrioption}>
                  Will not be displayed in the profile
                </label>
              </Form.Item> */}

          <div className={styles.profile_items}>
            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Work</label>
              </div>
              <Form.Item name="work">
                <Input placeholder="Enter Work" size="large" />
              </Form.Item>

              <label className={styles.descrioption}>
                Will not be displayed in the profile
              </label>
            </div>

            <div className={styles.block}>
              <div className={styles.placeholder}>
                <label>Location</label>
              </div>

              <Form.Item name="location">
                <Select
                  showSearch
                  size="large"
                  loading={isLoading}
                  className={styles.item}
                  options={optionsLocation}
                  placeholder="Enter Location"
                  style={{ fontFamily: "Lexend" }}
                />
              </Form.Item>
              <label className={styles.descrioption}>
                Will not be displayed in the profile
              </label>
            </div>
          </div>

          <div>
            <Form.Item className={styles.form_item}>
              <Button
                className={styles.button}
                htmlType="submit"
                type="primary"
                size="large"
              >
                Save changes
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </AntdProvider>
  );
};

export const FormProfile = observer(FormProfileComponent);
