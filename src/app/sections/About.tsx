"use client";

import SplitText from "@/app/effects/SplitText";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="section w-full h-screen relative overflow-hidden py-0 lg:py-0">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[0vh] right-[10vw] w-[40vw] max-w-[200px] aspect-square opacity-40 lg:opacity-70 lg:right-[75vw] lg:w-[20vw] lg:top-[2vh]" data-speed="0.9">
          <Image src="/cloud_final4.webp" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[10vh] left-[-10vw] w-[60vw] max-w-[400px] opacity-20 lg:opacity-30 lg:left-[5vw] lg:w-[35vw] lg:top-[15vh]" data-speed="0.8">
          <Image src="/cloud_final1.webp" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="absolute left-[-10%] top-[2%] w-[70vw] sm:w-[50vw] lg:top-[50%] lg:left-0 lg:-translate-y-1/2 lg:w-[40vw] max-w-[750px] z-10 opacity-80 lg:opacity-100">
        <Image
          src="/landing-plane.webp"
          alt="Landing Plane"
          width={700}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute right-[-2vw] bottom-[-5vh] w-[70vw] sm:w-[50vw] md:w-[40vw]  lg:bottom-[5vh] lg:w-[32vw] max-w-[700px] z-10">
        <Image
          src="/waving-panda.webp"
          alt="Waving Panda"
          width={700}
          height={700}
          className="w-full h-auto object-contain"
        />
      </div>


      {/* Ground */}
      {/*<div
        className="absolute bottom-[14vh] left-0 right-0 h-[18%] lg:bottom-[18vh] lg:h-[23%] bg-linear-to-b from-[#228cf6]/80 to-[#edf6ff] opacity-40"
        style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
      />*/}


      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center lg:items-start justify-center lg:justify-end pt-[10vh] lg:pt-[10vh] px-6 lg:px-8">
        <div className="max-w-2xl lg:mr-[10vw] text-center lg:text-left bg-white/10 backdrop-blur-sm lg:bg-transparent p-6 rounded-2xl">
          <SplitText
            text="About RevolutionUC"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#151477]"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center" // Responsive textAlign might require a prop update or separate CSS
          />

          <div className="mt-8 lg:mt-12">
             <SplitText
              text="RevolutionUC is a 24-hour in-person student hackathon at the University of Cincinnati that is organized by ACM@UC. We invite you to join 300+ motivated students for an awesome weekend of code, community, and self-improvement! You don't have to have to be a computer science major or engineering student to attend. It's a learning experience for students of all skill levels!"
              className="text-base sm:text-lg font-sans text-[#151477] leading-relaxed"
              delay={30}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}