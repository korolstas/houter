import { Button, Form, Input, List, Modal, Rate } from "antd";

import { RateCard } from "@/components/cards/RateCard";
import { useStore } from "@stores";
import { User } from "@types";
import { useState } from "react";
import { AntdProvider } from "@components";

type ModalRaitingProps = {
  open: boolean;
  client: User;
  onCancel: (e: React.MouseEvent) => void;
};

type FormProps = {
  comment: string;
  rate: number;
};

export const ModalRaiting = ({ open, client, onCancel }: ModalRaitingProps) => {
  const { userStore } = useStore();
  const { createRate, user } = userStore;

  const [isActive, setIsActive] = useState(false);

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  const onFinish = (data: FormProps) => {
    createRate(client.id, data.comment, data.rate);
    setIsActive(!isActive);
  };

  const isMe = client.id === user?.id;

  return (
    <Modal
      title={
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                width: "100%",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#0e1735",
                  fontSize: 30,
                }}
              >
                {client.average_mark}
              </h2>
              <h2
                style={{
                  margin: 0,
                  color: "#636688bf",
                }}
              >
                /
              </h2>
              <h2
                style={{
                  margin: 0,
                  color: "#636688bf",
                }}
              >
                5
              </h2>
            </div>
            <Rate allowHalf value={client.average_mark} disabled />
            <h4>Rating {client.assessed_count}</h4>
          </div>
          {!isMe && user && (
            <div
              style={{
                display: "flex",
                justifyContent: !isActive ? "flex-end" : "flex-start",
                gap: 10,
                width: "100%",
                padding: 20,
                border: !isActive ? "none" : "1px solid #e0e3eb",
                borderRadius: 8,
              }}
            >
              <AntdProvider>
                {!isActive ? (
                  <Button type={"primary"} onClick={onClick}>
                    Add rate
                  </Button>
                ) : (
                  <Form
                    onFinish={onFinish}
                    style={{
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        width: "100%",
                      }}
                    >
                      <div>
                        <label>Comment* </label>
                      </div>

                      <Form.Item
                        name="comment"
                        rules={[{ required: true }]}
                        noStyle
                      >
                        <Input.TextArea
                          placeholder={"Enter comment"}
                          autoSize={{
                            minRows: 1,
                            maxRows: 5,
                          }}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </Form.Item>
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          width: "100%",
                        }}
                      >
                        <span>Rate*</span>
                        <Form.Item name="rate" rules={[{ required: true }]}>
                          <Rate />
                        </Form.Item>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 10,
                        width: "100%",
                      }}
                    >
                      <Button onClick={onClick}>Cancel</Button>
                      <Form.Item noStyle>
                        <Button type={"primary"} htmlType="submit">
                          Send
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                )}
              </AntdProvider>
            </div>
          )}
        </div>
      }
      open={open}
      footer
      onCancel={onCancel}
    >
      <List
        pagination={{ position: "bottom", align: "center" }}
        dataSource={client.assessed}
        renderItem={({ description, rating_id, appraiser_id, mark }) => (
          <List.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
              fontSize: 16,
            }}
          >
            <RateCard
              description={description}
              rating_id={rating_id}
              user_id={appraiser_id}
              mark={mark}
            />
          </List.Item>
        )}
      />
    </Modal>
  );
};
