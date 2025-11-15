import { Card } from "@/components/ui/card";

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

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getComments(postId: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return res.json();
}

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const post = await getPost(id);
  const author = await getUser(post.userId);
  const comments = await getComments(id);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <p className="text-sm text-gray-500 mt-2">Author: {author.name}</p>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className="p-4">
              <p className="font-semibold">{comment.email}</p>
              <p className="text-gray-600">{comment.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
