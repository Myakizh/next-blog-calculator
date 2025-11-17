import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPost() {
  return (
    <div className="mx-auto mt-10 space-y-6">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}
