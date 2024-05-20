import { ReactNode, useState } from "react";

import { Loader } from "@components";

type LoaderLayoutProps = {
  children: ReactNode;
  loading?: boolean;
  height?: number;
};

export const LoaderLayout = ({
  children,
  loading,
  height,
}: LoaderLayoutProps) => {
  const [isLoadingSpin, setIsLoadingSpin] = useState(true);

  setTimeout(() => {
    setIsLoadingSpin(false);
  }, 400);

  const isLoading = isLoadingSpin || loading;

  return isLoading ? (
    <Loader height={height} isLoading={isLoading} />
  ) : (
    children
  );
};
