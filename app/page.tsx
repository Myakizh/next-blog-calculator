import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Test Assignment: Next.js Blog & Calculator
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        This project includes a blog section and a simple calculator. Use the
        navigation above to explore the pages.
      </p>

      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Go to blog
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link
            href="/calculator"
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Open Calculator
          </Link>
        </Button>
      </div>
    </main>
  );
}
