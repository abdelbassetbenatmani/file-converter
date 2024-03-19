"use client";

import { Combine } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Combine />
      <span className="text-2xl font-bold">ConvertMe</span>
    </Link>
  );
};

export default Logo;
