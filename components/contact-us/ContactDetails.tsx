import { Mail, Phone, Clock } from 'lucide-react';
import { contactDetails } from '@/data/contact-us/contactDetails';
import AnimateOnScroll from '../ui/animateOnScroll';

export default function ContactDetails() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* General Enquiries */}
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8">
                General <span className="text-[#1f72b7]">Enquiries</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1f72b7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a
                      href={`mailto:${contactDetails.general.email}`}
                      className="text-gray-600 hover:text-[#1f72b7]"
                    >
                      {contactDetails.general.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1f72b7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a
                      href={`tel:${contactDetails.general.phone}`}
                      className="text-gray-600 hover:text-[#1f72b7]"
                    >
                      {contactDetails.general.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1f72b7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      {contactDetails.general.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* HR Enquiries */}
          <AnimateOnScroll>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold mb-8">
                HR <span className="text-[#1f72b7]">Enquiries</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1f72b7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a
                      href={`mailto:${contactDetails.hr.email}`}
                      className="text-gray-600 hover:text-[#1f72b7]"
                    >
                      {contactDetails.hr.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1f72b7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a
                      href={`tel:${contactDetails.hr.phone}`}
                      className="text-gray-600 hover:text-[#1f72b7]"
                    >
                      {contactDetails.hr.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1f72b7]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1f72b7]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      {contactDetails.hr.workingHours}
                    </p>
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
