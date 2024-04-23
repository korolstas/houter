import { Dropdown } from "@components";

import { CustomAvatar } from "../CustomAvatar";
import { User } from "@types";

type UserDropdownProps = {
  user: User;
  items: {
    key: string;
    label: JSX.Element;
    icon: JSX.Element;
    danger: boolean | undefined;
  }[];
};

export const UserDropdown = ({ user, items }: UserDropdownProps) => {
  console.log("user", user);

  return (
    <Dropdown variant={"green"} items={items} overlayClassName={"green"}>
      <CustomAvatar
        isName
        firstName={user.firstName}
        lastName={user.lastName}
        image={user?.imgUrl}
        id={user.id}
      />
    </Dropdown>
  );
};
