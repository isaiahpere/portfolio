import React from "react";
import Link from "next/link";

import { Roboto, Modak } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const roboto = Modak({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="pt-2">
      <ul className="w-full text-center">
        <li className={roboto.className}>
          <Link
            href={"/"}
            className="flex items-center justify-center flex-col"
          >
            <Image
              src={
                "https://res.cloudinary.com/filemancentral/image/upload/v1719028571/portfolio/personal-website/contact/face_gz0ju2.png"
              }
              alt="anime portrait of Isaiah"
              width={50}
              height={50}
              className="mb-1"
            />
            <p
              id="my-name"
              className="stroke text-3xl leading-none text-[#fff] stroke-[#000]"
            >
              Isaiah's
            </p>
            <p className="stroke text-4xl leading-none text-yellow">
              Portfolio
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
