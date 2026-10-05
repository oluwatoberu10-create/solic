import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui/primitives";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  image?: string;
  children?: ReactNode;
};

/** Dark title band used at the top of every inner page. */
export function PageHero({ eyebrow, title, description, crumbs, image = "/images/southampton-civic-centre.jpg", children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill priority sizes="100vw" className="slow-zoom object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
      </div>
      <Container className="pb-20 pt-36 sm:pb-24 sm:pt-44">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="rise mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" aria-hidden />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/80">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="rise max-w-3xl" style={{ animationDelay: "60ms" }}>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="display mt-6 text-[2.9rem] text-white sm:text-6xl lg:text-[4.6rem]">{title}</h1>
          {description && <p className="mt-7 max-w-2xl text-[17.5px] leading-relaxed text-white/70">{description}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}
