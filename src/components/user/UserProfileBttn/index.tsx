import { Dropdown } from "@components";

import { CustomAvatar } from "../CustomAvatar";

type UserProfileBttnProps = {
  user: any;
};

export const UserProfileBttn = ({ user }: UserProfileBttnProps) => {
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
    <Dropdown variant={"green"} option={option}>
      <CustomAvatar
        firstName={user.firstName}
        lastName={user.lastName}
        image={user?.img}
        id={user.id}
      />
    </Dropdown>
  );
};
