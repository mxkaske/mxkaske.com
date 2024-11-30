import React from "react";
import { Metadata } from "next";
import { Link, LinkProps } from "@/components/mdx/link";
import { BasicLayout } from "./_components/basic-layout";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "mxkaske.dev",
  description: "Never. Stop. Building.",
  metadataBase: new URL("https://mxkaske.dev"),
  twitter: {
    images: [`/api/og`],
    card: "summary_large_image",
    title: "mxkaske.dev",
    description: "Never. Stop. Building.",
  },
  openGraph: {
    type: "website",
    images: [`/api/og`],
    title: "mxkaske.dev",
    description: "Never. Stop. Building.",
  },
};

export default function Home() {
  return (
    <BasicLayout>
      <div className="space-y-8">
        <h1 className="font-cal text-3xl">Never. Stop. Building.</h1>
        {/* ADD: Open-Source Advocate */}
        <div className="space-y-1">
          <p className="font-medium text-muted-foreground">Building</p>
          <ul className="list-inside list-disc space-y-1 marker:text-muted-foreground">
            {links.map((props) => (
              <li key={props.href}>
                <Link {...props} />
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="space-y-1">
          <p className="font-medium text-muted-foreground">Sharing</p>
          <ul className="list-inside list-disc space-y-1 marker:text-muted-foreground">
            {socials.map((props) => (
              <li key={props.href}>
                <Link {...props} />
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="space-y-1">
          <p className="font-medium text-muted-foreground">Versioning</p>
          <ul className="list-inside list-disc space-y-1 marker:text-muted-foreground">
            {versions.map((props) => (
              <li key={props.href}>
                <Link {...props} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BasicLayout>
  );
}

const links: LinkProps[] = [
  { children: "openstatus.dev", href: "https://openstatus.dev" },
  {
    children: "craft.mxkaske.dev",
    href: "https://craft.mxkaske.dev",
    internal: true,
  },
  { children: "light.openstatus.dev", href: "https://light.openstatus.dev" },
  { children: "time.openstatus.dev", href: "https://time.openstatus.dev" },
  {
    children: "data-table.openstatus.dev",
    href: "https://data-table.openstatus.dev",
  },
];

const socials: LinkProps[] = [
  { children: "GitHub", href: "https://github.com/mxkaske" },
  { children: "Twitter", href: "https://twitter.com/mxkaske" },
  { children: "LinkedIn", href: "https://linkedin.com/in/mxkaske" },
  { children: "BlueSky", href: "https://bsky.app/profile/mxkaske.dev" },
];

const versions: LinkProps[] = [
  { children: "v1.mxkaske.dev", href: "https://v1.mxkaske.dev" },
  { children: "v2.mxkaske.dev", href: "https://v2.mxkaske.dev" },
];
