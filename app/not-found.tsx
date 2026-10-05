import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page not found" description="The page you were looking for doesn't exist or may have moved.">
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="light" arrow>
          Return Home
        </Button>
        <Button href="/contact#enquiry" variant="ghost-light">
          Speak With Toby
        </Button>
      </div>
    </PageHero>
  );
}
