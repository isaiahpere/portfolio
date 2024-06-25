import Sections from "@/components/Sections";
import sectionsData from "../data/sectionsData.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center  bg-light-blue">
      <h1 className="mb-5 text-xl font-semibold">Porfolio</h1>
      <Sections data={sectionsData} />
    </main>
  );
}
