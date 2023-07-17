import NextLink from "next/link";

import { LinkInner, LinkInnerProps } from "./linkInner";

export type LinkProps = LinkInnerProps;
export const Link = ({ children, variant, href }: LinkProps) => {
  return (
    <LinkInner href={href} nextLink={NextLink} variant={variant}>
      {children}
    </LinkInner>
  );
};
