import Headings from "../ui/Heading";
import {
  officeLocation,
  officeImages,
  headings,
  sideImages,
} from "@/data/contact-us/locations";
import AnimateOnScroll from "../ui/animateOnScroll";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  Globe,
  Car,
  Train,
  Plane,
} from "lucide-react";

export default function AddressBlock() {
  return (
    <section className="py-14 bg-white">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <Headings
            tag={headings.tag}
            title={headings.title}
            subtitle={headings.subtitle}
          />
        </div>
      </AnimateOnScroll>

      <div className="max-w-8xl mx-auto px-8  grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {officeLocation.city}
                </h3>
                <p className="text-gray-600">{officeLocation.address} </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-600">Working Hours: 24/7</p>
                  <p className="text-blue-600 text-sm">
                    {" "}
                    {officeLocation.workingHours}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <p className="text-gray-600"> {officeLocation.timeZone}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-9">
            <h3 className="text-lg font-semibold mb-6">How to Reach Us</h3>
            <div className="space-y-4">
              {[
                {
                  icon: Car,
                  title: "By Car",
                  desc: "40 minutes from city center via NH44",
                  bgColor: "bg-green-100",
                  color: "text-green-600",
                },
                {
                  icon: Train,
                  title: "Airport Express",
                  desc: "Direct train every 30 minutes",
                  bgColor: "bg-purple-100",
                  color: "text-purple-600",
                },
                {
                  icon: Plane,
                  title: "Airport Terminal",
                  desc: "Connected to Terminal 1 via skybridge",
                  bgColor: "bg-blue-100",
                  color: "text-blue-600",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`${item.bgColor} p-2 rounded-lg`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Phone className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 (080) 4567-8900</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Mail className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@company.com</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <MessageSquare className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600">Available 24/7</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {officeImages.map((image, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-8 relative group"
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-white text-xl font-semibold mb-2">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-white/80">{image.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-span-12 md:col-span-4 space-y-4">
                {sideImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[190px] rounded-2xl overflow-hidden group"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 p-4">
                        <h4 className="text-white font-medium">
                          {image.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
