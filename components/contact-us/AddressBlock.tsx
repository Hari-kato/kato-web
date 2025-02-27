import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Car,
  Train,
  Plane,
  Building2,
  Users,
  MessageCircle,
} from "lucide-react";
import {
  headings,
  officeLocation,
  contactDetails,
} from "@/data/contact-us/locations";
import AnimateOnScroll from "../ui/animateOnScroll";
import Headings from "../ui/Heading";

export default function AddressBlock() {
  return (
    <section className="py-14 bg-gray-100">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto">
          <Headings
            tag={headings.tag}
            title={headings.title}
            subtitle={headings.subtitle}
            alignment="center"
          />

          <div className="grid grid-cols-12 gap-6">
            {/* Main Office Card - First Row */}
            <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay"></div>
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-10 h-10" strokeWidth={1.5} />
                    <h2 className="text-3xl font-bold">Our Location</h2>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 mt-1" strokeWidth={1.5} />
                      <div>
                        <p className="text-xl font-medium">
                          {officeLocation.city}
                        </p>
                        <p className="text-blue-100">
                          {officeLocation.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 mt-1" strokeWidth={1.5} />
                      <div>
                        <p className="text-xl font-medium">Working Hours</p>
                        <p className="text-blue-100">
                          {officeLocation.workingHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation - First Row */}
            <div className="col-span-12 md:col-span-4 bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl p-8 shadow-lg text-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold">Getting Here</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium">Airport Transfer</p>
                      <p className="text-green-100 text-sm">20 min by taxi</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium">Free Parking</p>
                      <p className="text-green-100 text-sm">
                        Available on premises
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HR Department - Second Row */}
            <div className="col-span-12 md:col-span-7 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 shadow-lg text-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold">HR Department</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 mb-3" strokeWidth={1.5} />
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href={`mailto:${contactDetails.hr.email}`}
                    className="text-purple-100 hover:text-white"
                  >
                    {contactDetails.hr.email}
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 mb-3" strokeWidth={1.5} />
                  <p className="font-medium mb-1">Phone</p>
                  <a href="#" className="text-purple-100 hover:text-white">
                    {contactDetails.hr.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* General Inquiries - Second Row */}
            <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl p-8 shadow-lg text-white hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
                  <h2 className="text-2xl font-bold">General Inquiries</h2>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 shadow-inner">
                        <Mail className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href={`mailto:${contactDetails.general.email}`}
                          className="text-rose-100 hover:text-white transition-colors duration-300"
                        >
                          {contactDetails.general.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 shadow-inner">
                        <Phone className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium">Main Line</p>
                        <div className="flex flex-col">
                          {" "}
                          <a
                            href={`tel:${contactDetails.general.phone}`}
                            className="text-rose-100 hover:text-white transition-colors duration-300"
                          >
                            {contactDetails.general.phone}
                          </a>
                          <a
                            href={`tel:${contactDetails.general.phone}`}
                            className="text-rose-100 hover:text-white transition-colors duration-300"
                          >
                            {contactDetails.general.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
