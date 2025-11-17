import { Card } from "@/components/ui/card";
import { getPost, getUser, getComments } from "@/lib/api";

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const post = await getPost(id);
  const author = await getUser(post.userId);
  const comments = await getComments(id);

  return (
    <div className="p-8 space-y-8">
      <article className="prose max-w-none">
        <h1 className="mb-1">{post.title}</h1>
        <p className="text-muted-foreground mt-0">
          <strong>Author:</strong> {author.name}
        </p>
        <p>{post.body}</p>
      </article>
      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className="gap-1 p-4">
              <p>{comment.body}</p>
              <p className="text-muted-foreground text-right">
                {comment.email}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
