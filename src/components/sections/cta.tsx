import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function CTA() {
  return (
    <section className="container py-12 text-center md:py-24">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Ready to Get Started?
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
        Join thousands of developers building faster with our template. Sign up
        today to get started!
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}
