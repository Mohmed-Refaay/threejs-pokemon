import { Experience } from "@/components/WebGL/Experience";
import { HeroScreen } from "@/components/HeroScreen";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-between bg-[#d22b2b] z-0">
      <div className="w-full h-full absolute inset-0 z-20">
        <Experience />
      </div>

      <HeroScreen />
    </main>
  );
}
