import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 text-sm text-gray-600">
        <span>© 2025 Blog Calculator Company</span>

        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
