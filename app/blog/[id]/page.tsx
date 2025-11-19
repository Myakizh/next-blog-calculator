import { Suspense } from "react";
import { getPost, getUser } from "@/lib/api";
import Comments from "./comments";
import CommentsSkeleton from "./comments-skeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page",
  description: "Blog page with comments",
};

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const post = await getPost(id);
  const author = await getUser(post.userId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose max-w-none">
        <h1 className="mb-1">{post.title}</h1>
        <p className="text-muted-foreground mt-0">
          <strong>Author:</strong> {author.name}
        </p>
        <p>{post.body}</p>
      </article>
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
}
