import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bug } from "lucide-react"

export default function NavBar() {
  return (
    <nav className="flex items-center gap-4 border-b mb-6 py-2 px-4 h-14">
      <Link href="/"><Bug size={16}/></Link>
      <NavLink text="Home" to="/" />
      <NavLink text="Issues" to="/issues" />
    </nav>
  )
}
