import { lifeAtTeslaImages } from '@/data/carrers/lifeAtTesla';
import { clients } from '@/data/home/clients';

export default function LifeAtTesla() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Life at <span className="text-[#1f72b7]">Tesla</span>
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {/* Top Row */}
        <div className="w-full overflow-x-hidden whitespace-nowrap">
          <div className="flex space-x-6 animate-[scroll_50s_linear_infinite]">
            {[...lifeAtTeslaImages, ...lifeAtTeslaImages].map(
              (image, index) => (
                // {[...clients, ...clients].map((client, index) => (
                <div
                  key={`top-${index}`}
                  className={`relative h-[300px] ${
                    index % 2 === 0 ? 'w-[250px]' : 'w-[400px]'
                  } flex-shrink-0 overflow-hidden rounded-lg`}
                >
                  <img
                    src={image}
                    // src={`${client.logo}${client.name}`}
                    alt={`Life at Tesla ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full overflow-x-hidden whitespace-nowrap">
          <div className="flex space-x-6 animate-[scroll_50s_linear_infinite_reverse]">
            {[
              ...lifeAtTeslaImages.slice().reverse(),
              ...lifeAtTeslaImages.slice().reverse(),
            ].map((image, index) => (
              // {[...clients.slice(10), ...clients.slice(10)].map((client, index) => (
              <div
                key={`bottom-${index}`}
                className={`relative h-[300px] ${
                  index % 2 === 0 ? 'w-[400px]' : 'w-[250px]'
                } flex-shrink-0 overflow-hidden rounded-lg`}
              >
                <img
                  src={image}
                  // src={`${client.logo}${client.name}`}
                  alt={`Life at Tesla ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
