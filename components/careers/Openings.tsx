import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { openings } from "@/data/carrers/openings";
import AnimateOnScroll from "../ui/animateOnScroll";
import AnimatedButton from "../ui/AnimatedButton";
import Image from "next/image";

export default function Openings() {
  const toggleJobDetails = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const jobCard = button.closest(".job-card") as HTMLElement;
    const details = jobCard?.querySelector(".job-details") as HTMLElement;

    if (jobCard && details) {
      const isOpen = jobCard.getAttribute("data-open") === "true";

      jobCard.setAttribute("data-open", isOpen ? "false" : "true");
      details.style.display = isOpen ? "none" : "block";
    }
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
    <div className="absolute inset-0">
    <Image
      src="/openings.svg"
      alt="Down Wave"
      layout="fill" 
      objectFit="cover" 
      className="w-full h-full"
    />
  </div>
  
    <div className="absolute top-3 right-[-29px] hidden md:block">
      <h1 className="text-[150px] font-bold text-gray-300 uppercase text-opacity-10 leading-none">
        openings
      </h1>
    </div>
  
    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4">
      <AnimateOnScroll>
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">We're Hiring!</span> Your skills are valued
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Tesla is looking for talented and skilled professionals from the tech and design domain 
            to be a part of a revolutionary company that's shaping the future of technology.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            To apply for any of the below positions, email your updated resume/CV to{" "}
            <a href="mailto:careers@tesla.com" className="text-primary hover:underline">
              careers@tesla.com
            </a>
          </p>
        </div>
      </AnimateOnScroll>
  
      {/* Job Openings */}
      <div className="space-y-6">
        {openings.map((job, index) => (
          <AnimateOnScroll key={index}>
            <div className="job-card bg-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-300" data-open="false">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-400 text-sm">Experience</p>
                        <p className="text-white">{job.experience}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Positions</p>
                        <p className="text-white">{job.positions}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Qualification</p>
                        <p className="text-white">{job.qualification}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={toggleJobDetails}
                      className="flex items-center justify-center px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="show-text">View Details</span>
                      <ChevronDown className="ml-2 w-4 h-4 show-icon" />
                      <span className="hidden hide-text">Hide Details</span>
                      <ChevronUp className="ml-2 w-4 h-4 hide-icon hidden" />
                    </button>
  
                    <AnimatedButton
                      label="Apply Now"
                      icon={<ArrowRight className="w-5 h-5 text-white" />}
                      customClass="px-6 py-2"
                    />
                  </div>
                </div>
  
                {/* Job Details Section - Initially Hidden */}
                <div className="job-details mt-8 pt-6 border-t border-white/10 hidden">
                  <p className="text-gray-300 mb-6">{job.details.description}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.details.responsibilities.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.details.requirements.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {job.details.benefits.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
  
  );
}
