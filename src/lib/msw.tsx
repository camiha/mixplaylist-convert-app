import { ReactNode } from "react";

import { MSWDevTools } from "msw-devtools";

import { IS_DEVELOPMENT } from "@/config/constants";
import { handlers } from "@/testing/mocks";

export type MSWWrapperProps = {
  children: ReactNode;
};

require("@/testing/mocks/initialize");

export const MSWWrapper = ({ children }: MSWWrapperProps) => {
  return (
    <>
      {IS_DEVELOPMENT && <MSWDevTools handlers={handlers} />}
      {children}
    </>
  );
};
