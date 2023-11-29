import { Experience } from "@/components/WebGL/Experience";
import { HeroScreen } from "@/components/HeroScreen";
import { DetailsSection } from "@/components/DetailsSection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative  bg-[#d22b2b] overflow-hidden">
      <LoadingScreen />
      <Suspense fallback={null}>
        <div className="w-full h-full fixed inset-0 z-20">
          <Experience />
        </div>
      </Suspense>

      <section className="first-section w-full relative h-[100dvh]">
        <HeroScreen />
      </section>

      <section className="second-section w-full relative h-[100dvh]">
        <DetailsSection />
      </section>
    </main>
  );
}
