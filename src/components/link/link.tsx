import { ReactNode } from "react";

import NextLink from "next/link";

import { LinkInner } from "./linkInner";

export type LinkProps = {
  children: ReactNode;
};
export const Link = ({ children }: LinkProps) => {
  return <LinkInner nextLink={NextLink}>{children}</LinkInner>;
};
