"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-background/60 border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          BCLogo
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/calculator" className="hover:underline">
            Calculator
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background/80 backdrop-blur-md border-t px-4 py-3 flex flex-col gap-3 text-sm">
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="hover:underline"
          >
            Blog
          </Link>

          <Link
            href="/calculator"
            onClick={() => setOpen(false)}
            className="hover:underline"
          >
            Calculator
          </Link>
        </nav>
      )}
    </header>
  );
}
