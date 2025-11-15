import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          BCLogo
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>

          <Link href="/calculator" className="hover:underline">
            Calculator
          </Link>
        </nav>
      </div>
    </header>
  );
}
