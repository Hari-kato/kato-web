"use client";

const clients = [
  { name: "TechCorp" },
  { name: "InnovateLabs" },
  { name: "FutureTech" },
  { name: "DataFlow" },
  { name: "CloudNine" },
  { name: "SmartSys" },
  { name: "TechGiant" },
  { name: "DigiCorp" },
  { name: "ByteWorks" },
  { name: "NetSphere" },
  { name: "AlphaTech" },
  { name: "BetaSoft" },
  { name: "CloudFlow" },
  { name: "DataTech" },
  { name: "EcoSys" },
  { name: "FlowTech" },
  { name: "GlobalIT" },
  { name: "HyperTech" },
  { name: "InfoSys" },
  { name: "JetTech" }
];

export default function Clients() {
  return (
    <section className="py-20 bg-light-blue w-full overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary-blue">
          Trusted By Industry Leaders
        </h2>
        <p className="text-center text-gray-text mb-16">
          Join hundreds of satisfied clients who trust us with their digital transformation
        </p>
      </div>

      {/* First Row */}
      <div className="relative w-full">
        <div className="flex space-x-12 animate-[scroll_50s_linear_infinite]">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0"
            >
              <img 
                src={`https://placehold.co/180x100/f6f9ff/1e3fd8/png?text=${client.name}`}
                alt={client.name}
                className="w-[180px] h-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="relative w-full mt-12">
        <div className="flex space-x-12 animate-[scroll_50s_linear_infinite_reverse]">
          {[...clients.slice(10), ...clients.slice(10)].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0"
            >
              <img 
                src={`https://placehold.co/180x100/f6f9ff/1e3fd8/png?text=${client.name}`}
                alt={client.name}
                className="w-[180px] h-[100px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}