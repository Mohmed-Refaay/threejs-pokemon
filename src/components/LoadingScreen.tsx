import Image from "next/image";

export function LoadingScreen() {
  return (
    <section className="loading-section w-full h-full fixed inset-0 z-50 bg-white">
      <div className="w-full h-full flex items-center justify-center gap-5">
        <div className="w-fit h-fit  flex items-center justify-center gap-5 overflow-hidden">
          <Image
            alt="Loading..."
            src="/point.png"
            width={90}
            height={90}
            priority
            className="loading-element"
          />
          <h1 className="loading-element text-5xl font-black text-[#d22b2b] translate-y-1">
            Loading...
          </h1>
        </div>
      </div>
    </section>
  );
}
