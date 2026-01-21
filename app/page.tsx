import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Test Assignment: Next.js Blog & Calculator!
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        This project includes a blog section and a simple calculator. Use the
        navigation above to explore the pages.
      </p>

      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="/blog">Go to blog</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/calculator">Open Calculator</Link>
        </Button>
      </div>
    </div>
  );
}
