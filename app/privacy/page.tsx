import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of test assignment project",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose">
        <h1>Privacy Policy</h1>
        <p>
          This is a simple test project, and no real user data is collected.
        </p>
        <p>
          All data used in this project (such as blog posts and comments) is
          either dummy data or fetched from a public API (e.g.,
          JSONPlaceholder).
        </p>
        <p>
          By using this application, you acknowledge that this is for testing
          and learning purposes only.
        </p>
        <p>
          For any questions regarding privacy in this test project, please
          contact the developer.
        </p>
      </article>
    </div>
  );
}
