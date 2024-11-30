import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// TODO: add an arrow for external links

export interface LinkProps extends Omit<NextLinkProps, "href"> {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  /**
   * Forcing the link to be considered internal.
   * @example https://craft.mxkaske.dev should be considered internal
   */
  internal?: boolean;
}

export function Link({
  className,
  href,
  internal,
  children,
  ...props
}: LinkProps) {
  const internalLink = href?.toString().startsWith("/");
  const internalHash = href?.toString().startsWith("#");
  const isInternal = internal || internalLink || internalHash;
  const externalLinkProps = !isInternal
    ? { target: "_blank", rel: "noreferrer" }
    : undefined;

  const Anchor = !isInternal ? "a" : NextLink;

  return (
    <Anchor
      className={cn(
        // "ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md",
        "group text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground",
        className,
      )}
      // @ts-ignore FIXME: Url only works in NextLink
      href={href}
      {...externalLinkProps}
      {...props}
    >
      {children}
      {!isInternal ? (
        <ArrowUpRight className="text-muted-foreground w-4 h-4 inline-block ml-0.5 group-hover:text-foreground" />
      ) : null}
    </Anchor>
  );
}
