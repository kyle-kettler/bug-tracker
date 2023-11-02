import React from "react";
import Link from "next/link";

type NavLinkProps = {
  text: string;
  to: string;
}

export default function NavLink({ text, to }: NavLinkProps) {
  return (
    <Link className="text-zinc-500 hover:text-zinc-950 transition-colors" href={to}>{text}</Link>
  )
}
