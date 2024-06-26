import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxSizeVariants = cva("flex flex-col items-center retro-border", {
  variants: {
    variant: {
      sm: "min-w-[186px] min-h-[186px]",
      md: "min-w-[280px] min-h-[280px]",
      lg: "min-w-[480px] min-h-[480px]",
    },
    defaultVariants: {
      variant: "sm",
    },
  },
});

type BoxSizeVariants = VariantProps<typeof boxSizeVariants>;

interface RetroBoxProps extends BoxSizeVariants {
  label: string;
  children: React.ReactNode;
}
const RetroBox = ({ label, children, variant }: RetroBoxProps) => {
  return (
    <div
      className={cn(
        "bg-light-gray mt-6 rounded-lg overflow-hidden ",
        boxSizeVariants({ variant })
      )}
    >
      <div className="bg-yellow w-full text-left p-1 text-sm font-bold border-b-2 border-slate-500">
        <p className="text-black/90">{label}</p>
      </div>
      <div className="flex items-center flex-col justify-center flex-1 p-2">
        {children}
      </div>
    </div>
  );
};

export default RetroBox;
