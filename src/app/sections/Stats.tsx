import Image from "next/image";

export default function Stats() {
  return (
    <section id="stats" className="section relative w-full overflow-hidden">
      <div className="relative w-full h-auto sm:h-[1250px] md:h-[1400px]">
        {/* MOBILE – stacked small screens */}
        <div className="sm:hidden flex flex-col items-center gap-4 py-8">
          <div className="w-10/12 max-w-xs">
            <Image
              src="/24_hours_grain.webp"
              alt="24 hours"
              width={600}
              height={360}
              className="w-full h-auto"
              priority={false}
              sizes="(max-width: 640px) 80vw, 600px"
            />
          </div>

          <div className="w-10/12 max-w-xs">
            <Image
              src="/60+_grain.webp"
              alt="60+ projects"
              width={600}
              height={360}
              className="w-full h-auto"
              sizes="(max-width: 640px) 80vw, 600px"
            />
          </div>

          <div className="w-10/12 max-w-xs">
            <Image
              src="/870+_grain.webp"
              alt="870+ registrants"
              width={800}
              height={480}
              className="w-full h-auto"
              sizes="(max-width: 640px) 80vw, 800px"
            />
          </div>

          <div className="w-10/12 max-w-xs">
            <Image
              src="/300+_grain.webp"
              alt="300+ participants"
              width={600}
              height={360}
              className="w-full h-auto"
              sizes="(max-width: 640px) 80vw, 600px"
            />
          </div>
        </div>

        {/* DESKTOP / TABLET – overlays (hidden on xs) */}
        <div className="hidden sm:block">
          {/* LEFT – 24 hours */}
          <div className="absolute left-[-6%] sm:left-[-18%] top-[4%] z-20">
            <Image
              src="/24_hours_grain.webp"
              alt="24 hours"
              width={2200}
              height={1300}
              className="h-auto w-[clamp(280px,68vw,1120px)]"
              priority={false}
            />
          </div>

          {/* RIGHT – 60+ */}
          <div className="absolute right-[-4%] sm:right-[-10%] top-[20%] z-30">
            <Image
              src="/60+_grain.webp"
              alt="60+ projects"
              width={2100}
              height={1200}
              className="h-auto w-[clamp(260px,58vw,1040px)]"
            />
          </div>

          {/* LEFT – 870+ */}
          <div className="absolute left-[-6%] sm:left-[-16%] top-[30%] z-20">
            <Image
              src="/870+_grain.webp"
              alt="870+ registrants"
              width={2800}
              height={1800}
              className="h-auto w-[clamp(320px,82vw,1500px)]"
            />
          </div>

          {/* RIGHT – 300+ */}
          <div className="absolute right-[-4%] sm:right-[-8%] top-[46%] z-20">
            <Image
              src="/300+_grain.webp"
              alt="300+ participants"
              width={2100}
              height={1200}
              className="h-auto w-[clamp(260px,56vw,1020px)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
