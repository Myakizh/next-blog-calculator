"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Error — Something went wrong",
  description: "A global error occurred",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>

        <p className="text-muted-foreground mb-4">
          {error.message || "Unexpected error occurred."}
        </p>

        <Button variant="outline" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}
