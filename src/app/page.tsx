import { Experience } from "@/components/WebGL/Experience";
import { HeroScreen } from "@/components/HeroScreen";
import { DetailsSection } from "@/components/DetailsSection";

export default function Home() {
  return (
    <main className="relative  bg-[#d22b2b] overflow-hidden">
      <div className="w-full h-full fixed inset-0 z-20">
        <Experience />
      </div>

      <section className="first-section w-full relative h-[100dvh]">
        <HeroScreen />
      </section>

      <section className="second-section w-full relative h-[100dvh]">
        <DetailsSection />
      </section>
    </main>
  );
}
