import { observer } from "mobx-react-lite";
import Link from "next/link";

import { useStore } from "@stores";

import styles from "./styles.module.scss";

import { confMenu, configMenuType, dropDownMenu } from "./config";

import { Dropdown, Button } from "../../buttons";
import { SvgSwitcher } from "../../SvgSwitcher";
import { ScrollHeader } from "../ScrollHeader";
import { UserDropdown } from "../../user";

const HeaderComponent = () => {
  const { userStore, buttonStore } = useStore();
  const { user, clearUser } = userStore;
  const { setMenuType } = buttonStore;

  const bttn_text = "Sign In!";

  const itemsDownMenu = dropDownMenu.map(({ value, href, id }) => {
    return {
      key: id,
      label: (
        <Link href={`${href}${value.toLowerCase()}`}>
          <SvgSwitcher variant={value.toLowerCase()} />
          {value}
        </Link>
      ),
    };
  });

  const itemsMenuType = configMenuType.map(
    ({ label, key, href, icon, danger }) => {
      return {
        key: key,
        icon: icon,
        danger: danger,
        label: (
          <Link
            onClick={danger ? clearUser : () => setMenuType(key)}
            href={href}
          >
            {label}
          </Link>
        ),
      };
    }
  );

  return (
    <ScrollHeader>
      <div className={styles.container}>
        <div className={styles.width}>
          <div className={styles.header}>
            <div className={`${styles.link}`}>
              <div className={styles.center}>
                <Link href={"/"}>
                  <SvgSwitcher variant={"logo"} />
                </Link>
              </div>
            </div>
            <div className={`${styles.box}`}>
              <div className={styles.center}>
                <div className={styles.box_menu}>
                  {confMenu.map(({ label }) => {
                    return label.toLocaleLowerCase() === "property" ? (
                      <Dropdown
                        icon={<SvgSwitcher variant={"arrow"} />}
                        overlayClassName={"dark"}
                        items={itemsDownMenu}
                        variant={"dark"}
                        key={label}
                      >
                        {label}
                      </Dropdown>
                    ) : (
                      <Button key={label} variant={"dark"}>
                        {label}
                      </Button>
                    );
                  })}
                </div>
                {user ? (
                  <UserDropdown user={user} items={itemsMenuType} />
                ) : (
                  <Link href={"/auth/login"}>
                    <Button variant={"darkGreen"}>{bttn_text}</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollHeader>
  );
};

export const Header = observer(HeaderComponent);
