"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 shadow-sm">
      <Logo />
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="#" className="hover:text-red-700 duration-300 hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-700 duration-300 hover:font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-700 duration-300 hover:font-semibold">
              Pricacy policy
            </Link>
          </li>
        </ul>
      </nav>

      <Button>
        <Link href="/auth/login" className="flex items-center gap-2">
          <Github />
          Github
        </Link>
      </Button>
    </div>
  );
};

export default Navbar;
