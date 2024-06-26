import Sections from "@/components/Sections";
import sectionsData from "@/public/data/sectionsData.json";
import RetroBox from "@/components/retro-box";
import { LottieIcon } from "@/components/lottie";

import laptopGuy from "@/public/data/laptop-guy.json";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-light-blue gap-y-10 pb-2">
      <Sections data={sectionsData} />
      <RetroBox label="Software Engineer" variant={"md"}>
        <Image
          src="https://res.cloudinary.com/filemancentral/image/upload/v1719028502/portfolio/personal-website/boy_n9t5dc.png"
          alt="boy coding with dog"
          width={100}
          height={100}
          className="w-[180px] h-[180px]"
        />
      </RetroBox>
    </main>
  );
}
