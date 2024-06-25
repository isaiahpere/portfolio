import React from "react";

import { SectionItemType } from "@/types";

interface SectionsProps {
  data: SectionItemType[];
}

const Sections = ({ data }: SectionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {data.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sections;
