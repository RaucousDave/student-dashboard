"use client"

import { motion, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "./Sidebar";

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-2"
    >
      <div className="rounded-[1.75rem] border border-border/70 bg-card/95 px-3 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <LayoutGroup id="mobile-nav">
          <ul className="grid grid-cols-3 gap-2">
            {navlinks.map(({ id, name, icon: Icon, href }) => {
              const active = isActive(href);

              return (
                <li key={id}>
                  <Link
                    href={href}
                    aria-label={name}
                    aria-current={active ? "page" : undefined}
                    className={`
                      relative flex flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl px-3 py-2
                      text-[11px] font-medium tracking-wide transition-colors duration-200
                      ${active ? "text-foreground" : "text-muted-foreground hover:bg-accent/80 hover:text-foreground"}
                    `}
                  >
                    {active ? (
                      <motion.span
                        layoutId="mobile-nav-highlight"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-2xl border border-primary/20 bg-primary/10"
                      />
                    ) : null}
                    <Icon size={20} className="relative z-10 shrink-0" />
                    <span className="relative z-10">{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>
      </div>
    </nav>
  );
}
