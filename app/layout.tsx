import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Next Blog Calculator",
  description: "Test assignment project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto py-8">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
