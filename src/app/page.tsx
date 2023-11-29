import { Experience } from "@/components/WebGL/Experience";
import { HeroScreen } from "@/components/HeroScreen";
import { DetailsSection } from "@/components/DetailsSection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Suspense } from "react";
import Image from "next/image";

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
        <div className="scroll-up top-3 absolute left-1/2 -translate-x-1/2 animate-bounce opacity-0">
          <Image
            alt="Scroll up"
            src="/down-chevron.png"
            width={30}
            height={30}
            className="scroll-up-img"
            style={{
              rotate: "180deg",
            }}
          />
        </div>
        <DetailsSection />
      </section>
    </main>
  );
}
