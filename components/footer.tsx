import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-10">
      <div className="container mx-auto flex items-center justify-between py-4 text-sm text-gray-600">
        <span>© {new Date().getFullYear()} My Company</span>

        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
