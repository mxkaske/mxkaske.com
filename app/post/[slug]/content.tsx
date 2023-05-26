"use client";

import React from "react";
import { Post } from "@/.contentlayer/generated";
import { components } from "@/lib/mdx";
import { useMDXComponent } from "next-contentlayer/hooks";

export function Content({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  React.useEffect(() => {
    fetch(`/api/views?slug=${post.slug}`, { method: "POST" });
  }, [post.slug]);

  return (
    <div className="prose dark:prose-invert mx-auto prose-headings:font-cal prose-blockquote:font-light">
      <MDXContent components={components} />
    </div>
  );
}
