import { clients, headings } from "@/data/home/clients";
import Headings from "./ui/Heading";
import AnimateOnScroll from "./ui/animateOnScroll";

export default function Clients() {
  return (
    <section className="py-14 bg-light-blue w-full overflow-hidden">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <Headings
            tag={headings.tag}
            title={headings.title}
            subtitle={headings.subtitle}
          />
        </div>
      </AnimateOnScroll>

      {/* First Row - First 9 Clients */}
      <AnimateOnScroll>
        <div className="relative w-full">
          <div className="flex space-x-12 animate-[scroll_50s_linear_infinite]">
            {[...clients.slice(0, 9), ...clients.slice(0, 9)].map(
              (client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-[220px] h-[50px] object-fit filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Second Row - Remaining Clients */}
      <AnimateOnScroll>
        <div className="relative w-full mt-12">
          <div className="flex space-x-12 animate-[scroll_50s_linear_infinite_reverse]">
            {[...clients.slice(9), ...clients.slice(9)].map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-[220px] h-[90px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
