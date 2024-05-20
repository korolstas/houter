import { Dropdown } from "@components";
import { User } from "@types";

import { CustomAvatar } from "../CustomAvatar";

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
  return (
    <Dropdown variant={"green"} items={items} overlayClassName={"green"}>
      <div>{`${user.firstName} ${user.lastName}`}</div>
      <CustomAvatar
        id={user.id}
        imgUrl={user?.image ? user?.image : null}
        firstName={user.firstName}
        lastName={user.lastName}
      />
    </Dropdown>
  );
};
