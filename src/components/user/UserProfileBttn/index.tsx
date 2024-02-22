import { Dropdown } from "@components";

import { CustomAvatar } from "../CustomAvatar";
import { useStore } from "@mobx";

type UserProfileBttnProps = {
  user: any;
};

export const UserProfileBttn = ({ user }: UserProfileBttnProps) => {
  const { userStore } = useStore();
  const { clearUser } = userStore;

  const option = [
    {
      name: "Profile",
      href: "",
    },
    {
      name: "My Properties",
      svg: "properties",
      href: "",
    },
    {
      name: "Logout",
      href: "",
    },
  ];

  return (
    <Dropdown onClick={clearUser} variant={"green"} option={option}>
      <CustomAvatar
        firstName={user.firstName}
        lastName={user.lastName}
        image={user?.img}
        id={user.id}
      />
    </Dropdown>
  );
};
