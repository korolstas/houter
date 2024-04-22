import { Dropdown } from "@components";

import { CustomAvatar } from "../CustomAvatar";

type UserDropdownProps = {
  user: any;
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
      <CustomAvatar
        firstName={user.firstName}
        lastName={user.lastName}
        image={user?.imgUrl}
        id={user.id}
      />
    </Dropdown>
  );
};
