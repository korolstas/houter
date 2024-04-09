import { ConfigProvider } from "antd";
import { ReactNode } from "react";

type AntdProviderProps = {
  children: ReactNode;
};

export const AntdProvider = ({ children }: AntdProviderProps) => {
  const colors = {
    text: "#1b1c57",
    textMuted: "rgba(99, 102, 136, 0.75)",
    textGray: "#888b97",
    textWhite: "#f0f3fd",
    textGreen: "#047857",
    textYellow: "#f59e0b",

    textDarken: "#0e1735",
    textDarkenGrey: "#3c4563",

    backgroundGreenLight: "rgb(209, 250, 229)",
    backgroundGreen: "#10b981",
    backgroundGreenSecond: "#47b892",
    backgroundGray: "#e0e3eb",

    buttonGrey: "#d9d9d9",
  };

  const components = {
    colorPrimary: colors.backgroundGreen,
    colorPrimaryActive: colors.backgroundGreen,
    colorPrimaryHover: colors.backgroundGreen,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: components,
          Input: components,
          DatePicker: components,
          Checkbox: components,
          Button: {
            colorPrimary: colors.backgroundGreen,
            colorPrimaryHover: colors.backgroundGreenSecond,
            colorPrimaryActive: colors.textGreen,
            colorTextLightSolid: colors.backgroundGreenLight,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
