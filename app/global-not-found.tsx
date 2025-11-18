import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">
          This page does not exist.
        </h2>
        <p className="text-muted-foreground mb-6">
          It’s possible that it was deleted or you entered the wrong address.
        </p>
      </body>
    </html>
  );
}
