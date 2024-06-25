import React from "react";
import Image from "next/image";

import { SectionItemType } from "@/types";
import Link from "next/link";

interface SectionsProps {
  data: SectionItemType[];
}

const Sections = ({ data }: SectionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-4">
      {data.map((item) => (
        <Link key={item.id} href={item.href}>
          <div className="flex flex-col items-center gap-y-1">
            <Image
              src={item.image.source}
              alt={item.image.altText}
              width={70}
              height={70}
            />
            <p className="text-sm border-2 border-slate-700 w-[100px] bg-[#fff] text-center rounded-xl px-2">
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sections;
