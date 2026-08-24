"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { footer, assets } from "../data/site";
import { scrollToId } from "../lib/lenis";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { ArrowUpRight, IconFacebook, IconInstagram, IconYoutube } from "./ui/icons";

export function Footer() {
  const social = [IconFacebook, IconInstagram, IconYoutube];
  const router = useRouter();
  const pathname = usePathname();

  // In-page anchors live on the home page; navigate there first if elsewhere.
  const goHash = (hash: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToId(hash), 350);
    } else {
      scrollToId(hash);
    }
  };

  const linkClass = (active: boolean) =>
    `text-[14px] transition-colors hover:text-ink ${
      active ? "text-ink underline underline-offset-4" : "text-gray-body"
    }`;

  return (
    <footer
      id="contact-footer"
      className="relative bg-ink px-3 pb-6 pt-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.5)), url(${assets.panorama})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
        {/* Left white card: brand + newsletter */}
        <div className="flex flex-col rounded-[28px] bg-white p-8 md:p-12">
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-ink">
              <img src="/logo.png" alt="AMS logo" className="h-6 w-6 object-contain" />
            </span>
          </Link>
          <AnimatedHeading
            text={footer.cta}
            accent={footer.ctaAccent}
            className="mt-10 max-w-sm font-display text-[26px] font-medium leading-snug text-ink md:text-[30px]"
          />
          <p className="mt-6 text-[15px] text-gray-body">{footer.subtitle}</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex max-w-md items-center gap-2 rounded-pill border border-dashed border-black/20 p-1.5"
          >
            <input
              type="email"
              placeholder={footer.emailPlaceholder}
              className="flex-1 bg-transparent px-4 text-[14px] text-ink placeholder:text-gray-mute focus:outline-none"
            />
            <button className="btn-lime shrink-0">Subscribe</button>
          </form>
          <p className="mt-10 text-[13px] text-gray-mute">{footer.credit}</p>
        </div>

        {/* Right white card: pages / address / contact / social */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-[28px] bg-white p-8 md:p-12">
          <div>
            <h4 className="font-display text-[22px] font-medium text-ink">Pages</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {footer.pages.map((p) => {
                const active = !!p.to && pathname === p.to;
                return (
                  <li key={p.label}>
                    {p.to ? (
                      <Link href={p.to} className={linkClass(active)}>
                        {p.label}
                      </Link>
                    ) : p.hash ? (
                      <button
                        onClick={() => goHash(p.hash!)}
                        className={`text-left ${linkClass(false)}`}
                      >
                        {p.label}
                      </button>
                    ) : (
                      <span className="text-[14px] text-gray-mute">{p.label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[22px] font-medium text-ink">Address</h4>
            <ul className="mt-5 space-y-4 text-[14px] leading-snug text-gray-body">
              {footer.address.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-dashed border-black/15 pt-8">
            <h4 className="font-display text-[22px] font-medium text-ink">Contact</h4>
            <ul className="mt-5 space-y-3 text-[14px] text-gray-body">
              <li>
                <a href={`mailto:${footer.email}`} className="hover:text-ink">
                  {footer.email}
                </a>
              </li>
              <li>
                <a href={`tel:${footer.phone}`} className="hover:text-ink">
                  {footer.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-dashed border-black/15 pt-8">
            <h4 className="font-display text-[22px] font-medium text-ink">Social media</h4>
            <div className="mt-5 flex gap-4 text-ink">
              {social.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-transform hover:-translate-y-1"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
