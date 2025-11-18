import { getComments } from "@/lib/api";
import { Card } from "@/components/ui/card";

export default async function Comments({ postId }: { postId: number }) {
  const comments = await getComments(postId);

  return (
    <section>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="gap-1 p-4">
            <p>{comment.body}</p>
            <p className="text-muted-foreground text-right text-sm">
              {comment.email}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
