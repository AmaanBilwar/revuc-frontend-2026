import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SplitText from "@/app/effects/SplitText";
export default function Faq() {
  return (
    <div id="faq" className="section w-full h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pt-[10%] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <SplitText
            text="FAQ"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="who-can-attend">
              <AccordionTrigger>
                <span className="mx-auto text-lg sm:text-xl font-semibold ">
                  Who can attend the hackathon?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-center text-base sm:text-lg">
                The event is open to all students, regardless of major or experience level.
                Beginners are welcome!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="do-i-need-experience">
              <AccordionTrigger>
                <span className="mx-auto text-lg sm:text-xl font-semibold">
                  Do I need prior hacking experience?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-center text-base sm:text-lg">
                No experience is required. We&apos;ll have mentors, workshops, and resources to help
                you get started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="team-size">
              <AccordionTrigger>
                <span className="mx-auto text-lg sm:text-xl font-semibold ">
                  How big can teams be?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-center text-base sm:text-lg">
                Teams are typically 2–4 people. You can come with a team or form one during the
                event.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="what-should-i-bring">
              <AccordionTrigger>
                <span className="mx-auto text-lg sm:text-xl font-semibold ">
                  What should I bring?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-center text-base sm:text-lg">
                Bring your laptop, charger, and anything else you need to be comfortable (snacks,
                water bottle, etc.).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cost-to-attend">
              <AccordionTrigger>
                <span className="mx-auto text-lg sm:text-xl font-semibold ">
                  How much does it cost to attend?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-center text-base sm:text-lg">
                The hackathon is completely free for participants. Food, swag, and workshops are all
                provided.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
