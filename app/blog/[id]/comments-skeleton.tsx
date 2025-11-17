import { Skeleton } from "@/components/ui/skeleton";

export default function CommentsSkeleton() {
  return (
    <div className="space-y-4 mt-6">
      <Skeleton className="h-6 w-32" />

      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 border rounded-lg space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
}
