import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-white/40 border-b z-50">
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
