import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Rate } from "antd";

import { UserCard } from "@/components/user";
import { instance } from "@/api/config";
import { useStore } from "@stores";
import { User } from "@types";
import { DeleteOutlined } from "@ant-design/icons";

type RaitingCardProps = {
  user_id: number | string;
  description: string;
  rating_id: number;
  mark: number;
};

const RateCardComponent = ({
  description,
  rating_id,
  user_id,
  mark,
}: RaitingCardProps) => {
  const { userStore } = useStore();
  const { deleteRate, user } = userStore;
  const [client, setClient] = useState<User | null>(null);

  const getClient = async () => {
    try {
      const response = await instance.get(`/profile/${user_id}`);
      if (response.data) {
        setClient(response.data.msg);
      } else {
        console.error("No data found for user", user_id);
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  const handleDelete = (event: React.MouseEvent, id: number) => {
    event.stopPropagation();
    deleteRate(id);
  };

  const isMe = client?.id === user?.id;

  return client ? (
    <>
      <UserCard user={client} />
      <Rate disabled value={mark} />
      {description}
      {isMe && user && (
        <Button
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
          onClick={(e) => handleDelete(e, rating_id)}
          danger
          icon={<DeleteOutlined />}
        >
          Delete
        </Button>
      )}
    </>
  ) : (
    <div>Loading user data...</div>
  );
};

export const RateCard = observer(RateCardComponent);
