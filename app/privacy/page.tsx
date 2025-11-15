import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-4">
      <Card className="max-w-2xl w-full">
        <CardTitle className="text-center">Privacy Policy</CardTitle>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
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
        </CardContent>
      </Card>
    </main>
  );
}
