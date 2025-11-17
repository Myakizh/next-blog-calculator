import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/api";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <Image
              src={`https://picsum.photos/seed/${post.id}/400/200`}
              alt="Post image"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold line-clamp-2">
                {post.title}
              </h2>

              <p className="text-muted-foreground line-clamp-3 overflow-hidden wrap-break-word">
                {post.body}
              </p>

              <div className="mt-auto pt-4">
                <Link href={`/blog/${post.id}`}>
                  <Button className="w-full text-sm">Read More</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
