import { Card } from "@/components/ui/card";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type User = {
  id: number;
  name: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function BlogPage() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);
  const usersMap = new Map(users.map((user) => [user.id, user.name]));

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="p-4 hover:bg-gray-50 cursor-pointer">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
              <div className="text-right text-sm text-gray-500 mt-2">
                Author: {usersMap.get(post.userId)}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
