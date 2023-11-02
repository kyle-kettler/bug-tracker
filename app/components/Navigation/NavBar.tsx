"use client"

import React from "react";
import Link from "next/link";
import { Bug } from "lucide-react"
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const currentPath = usePathname();

  const paths = [
    {href: "/", label: "Dashboard"},
    {href: "/issues", label: "Issues"},
  ]

  return (
    <nav className="flex items-center gap-4 border-b mb-6 py-2 px-4 h-14">
      <Link href="/"><Bug size={16}/></Link>
      <ul className="flex items-center gap-4">
        {paths.map((link) => (
        <Link
          key={link.href}
          className={clsx(
            "hover:text-zinc-800 transition-colors",
            link.href === currentPath && "text-zinc-900",
            link.href !== currentPath && "text-zinc-500"
          )}
          href={link.href}>{link.label}</Link>)
        )}
      </ul>
    </nav>
  )
}
