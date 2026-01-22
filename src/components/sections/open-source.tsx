import Link from "next/link";

export default function OpenSource() {
  return (
    <section className="">
      <div className="container pb-14 lg:pb-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Premium Template
          </h2>
          <p className="max-w-[85%] text-balance leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Next Starter v2 is a premium template designed for production
            applications. Built with modern technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
