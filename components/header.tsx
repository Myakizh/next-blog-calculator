import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-md bg-background/60 border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            BCLogo
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/calculator" className="hover:underline">
              Calculator
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-xl">Menu</SheetTitle>
              </SheetHeader>

              <nav className="grid flex-1 auto-rows-min gap-6 px-4">
                <SheetClose asChild>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/calculator" className="hover:underline">
                    Calculator
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
