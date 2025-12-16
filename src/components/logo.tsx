import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/" className="flex  items-center">
      <Image src="/logo.svg" width={50} height={50} alt="logo" />
      <h2 className={cn(museo.className, "text-2xl")}>ScribeNova</h2>
    </Link>
  );
};
