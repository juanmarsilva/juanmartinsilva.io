import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("bento-grid max-w-7xl mx-auto px-4 py-12", className)}>
      {children}
    </div>
  );
}
