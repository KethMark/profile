"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const item = [
    {
      titles: "home",
      hrefs: "/",
    },
    {
      titles: "about",
      hrefs: "/about",
    },
    {
      titles: "projects",
      hrefs: "/projects",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="space-y-4">
      <div className="text-6xl font-bold">K</div>
      <nav className="space-y-2">
        {item.map((item)=> (
          <Link
            href={item.hrefs}
            key={item.hrefs} 
            className={cn(buttonVariants({variant: 'ghost'}),
              pathname === item.hrefs ? 'bg-gray-700 text-white'
              : 'hover:underline', "justify-start"
              )}
          >
            <div>
              {item.titles}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};
