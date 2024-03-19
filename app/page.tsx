import DropZone from "@/components/DropZone";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect.tsx";

export default function Home() {
  const words = [
    {
      text: "Convert",
      delay: 1000,
    },
    {
      text: "your",
      delay: 1000,
    },
    {
      text: "files",
      delay: 1000,
    },
    {
      text: "from",
      delay: 1000,
    },
    {
      text: "one",
      delay: 1000,
    },
    {
      text: "format",
      delay: 1000,
    },
    {
      text: "to",
      delay: 1000,
    },
    {
      text: "another",
      delay: 1000,
    },
  ];
  return (
    <main className="w-full container mx-auto h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full">
        <TypewriterEffect words={words} />
        <p className="text-lg text-center max-w-[700px] my-5 text-gray-500">
          Welcome to our platform - the premier destination for all your file conversion needs. We support a
          wide range of file formats and ensure fast, reliable, and high-quality conversions.
        </p>

        <DropZone />
      </div>

      <BackgroundBeams />
    </main>
  );
}
