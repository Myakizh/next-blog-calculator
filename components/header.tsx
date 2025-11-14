import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          MyLogo
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
