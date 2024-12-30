"use client";
import { cn } from "@/lib/utils";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  return (
    <div>
      <div
        className={cn(
          "hidden dark:block cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300  p-1.5 ",
          className
        )}
      >
        <div onClick={() => setTheme("light")}>
          <SunDim size={15} className={className} />
        </div>
      </div>
      <div
        className={cn(
          "block dark:hidden cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300  p-1.5 ",
          className
        )}
      >
        <div onClick={() => setTheme("dark")}>
          <Moon size={15} className={className} />
        </div>
      </div>
    </div>
  );
}
