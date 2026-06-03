import Link from "next/link";
import { navlinks } from "./Sidebar";

export default function MobileNav() {
  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-2"
    >
      <div className="rounded-[1.75rem] border border-border/70 bg-card/95 px-3 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <ul className="grid grid-cols-3 gap-2">
          {navlinks.map(({ id, name, icon: Icon }) => {
            return (
              <li key={id}>
                <Link
                  href="/"
                  aria-label={name}
                  className={`
                    flex flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2
                    text-[11px] font-medium tracking-wide transition-all duration-200
                     text-muted-foreground hover:bg-accent/80 hover:text-foreground
                    
                  `}
                >
                  <Icon size={20} className="shrink-0" />
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
