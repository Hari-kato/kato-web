import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Car,
  Train,
  Plane,
} from "lucide-react";
import { contactDetails } from "@/data/contact-us/contactDetails";
import AnimateOnScroll from "../ui/animateOnScroll";
import { headings, officeLocation } from "@/data/contact-us/locations";
import Headings from "../ui/Heading";

export default function AddressBlock() {
  return (
    <section className="py-24 bg-white">
      {/* <AnimateOnScroll>
        <div className="text-center mb-16">
          <Headings
            tag={headings.tag}
            title={headings.title}
            subtitle={headings.subtitle}
          />
        </div>
      </AnimateOnScroll> */}

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8">
                Our <span className="text-primary">Location</span>
              </h2>

              {/* Office Location */}
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {officeLocation.city}
                  </h3>
                  <p className="text-gray-600">{officeLocation.address}</p>
                </div>
              </div>

              {/* Working Hours & Time Zone */}
              <div className="space-y-6 mb-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-gray-600">Working Hours</p>
                    <p className="text-blue-600 text-sm">
                      {officeLocation.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Reach Us */}
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
          </AnimateOnScroll>
          {/* General Enquiries */}
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8">
                General <span className="text-primary">Enquiries</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a
                      href={`mailto:${contactDetails.general.email}`}
                      className="text-gray-600 hover:text-primary-dark"
                    >
                      {contactDetails.general.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a
                      href={`tel:${contactDetails.general.phone}`}
                      className="text-gray-600 hover:text-primary-dark"
                    >
                      {contactDetails.general.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600">10:00AM - 5:00PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* HR Enquiries */}
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8">
                HR <span className="text-primary">Enquiries</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a
                      href={`mailto:${contactDetails.hr.email}`}
                      className="text-gray-600 hover:text-primary-dark"
                    >
                      {contactDetails.hr.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a
                      href={`tel:${contactDetails.hr.phone}`}
                      className="text-gray-600 hover:text-primary-dark"
                    >
                      {contactDetails.hr.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600">10:00AM - 5:00PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
