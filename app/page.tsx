import Sections from "@/components/Sections";
import sectionsData from "../data/sectionsData.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-light-blue">
      <h1 className="mb-5 text-xl font-semibold">Welcome</h1>
      <Sections data={sectionsData} />
    </main>
  );
}
