"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useLayout } from "@/lib/hooks/useLayout";
import { Home, Book, Settings, LayoutPanelTop, PanelLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navlinks = [
  { id: 1, name: "Home", icon: Home, href: "/" },
  { id: 2, name: "Courses", icon: Book, href: "/courses" },
  { id: 3, name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useLayout();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <aside
      className={`
        hidden md:flex md:h-full md:min-h-0 md:shrink-0 md:flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? "md:w-16 items-center" : "md:w-64"}
        overflow-hidden border-r border-border/70
        bg-card/90 py-6 backdrop-blur-xl
      `}
    >
      {/* Toggle */}
      <div
        className={`flex mb-6 px-4 ${collapsed ? "justify-center" : "justify-end"}`}
      >
        <button
          onClick={toggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="cursor-pointer rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <PanelLeft
            size={18}
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {/* Logo */}
      <div
        className={`flex items-center gap-3 mb-8 px-4 ${collapsed ? "justify-center" : ""}`}
      >
        <LayoutPanelTop className="text-primary shrink-0" size={22} />
        <span
          className={`
            font-semibold text-xl text-foreground whitespace-nowrap
            transition-all duration-200
            ${collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}
          `}
        >
          Bento
        </span>
      </div>

      {/* Nav */}
      <LayoutGroup id="sidebar-nav">
        <nav className="flex flex-1 flex-col gap-1 px-2">
          {navlinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                href={link.href}
                key={link.id}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative flex items-center gap-3 overflow-hidden rounded-lg px-3 py-2.5
                  text-sm transition-colors duration-150
                  ${collapsed ? "justify-center" : ""}
                  ${active ? "text-foreground" : "text-muted-foreground hover:text-accent-foreground"}
                `}
              >
                {active ? (
                  <motion.span
                    layoutId="sidebar-highlight"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg border border-primary/20 bg-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  />
                ) : null}

                <link.icon size={18} className="relative z-10 shrink-0" />
                <span
                  className={`
                    relative z-10
                    whitespace-nowrap
                    transition-all duration-200
                    ${collapsed ? "w-0 overflow-hidden opacity-0" : "w-auto opacity-100"}
                  `}
                >
                  {link.name}
                </span>

                {/* Tooltip when collapsed */}
                {collapsed && (
                  <span
                    className="
                    absolute left-full ml-3 rounded-md border border-border bg-popover px-2 py-1 text-xs
                    whitespace-nowrap pointer-events-none text-popover-foreground
                    opacity-0 transition-opacity duration-150 group-hover:opacity-100 z-50
                  "
                  >
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </LayoutGroup>
    </aside>
  );
}
