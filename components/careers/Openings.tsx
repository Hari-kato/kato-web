"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const openings = [
  {
    title: "SEO Executive",
    experience: "3-4 Years",
    positions: 1,
    qualification: "Graduation",
    details: {
      description: "We are looking for an experienced SEO Executive to join our growing digital marketing team.",
      responsibilities: [
        "Develop and implement comprehensive SEO strategies",
        "Conduct keyword research and optimize content",
        "Monitor and analyze website analytics and performance metrics",
        "Perform ongoing keyword research and optimize existing content"
      ],
      requirements: [
        "3-4 years of proven SEO experience",
        "Strong understanding of search engine algorithms and ranking methods",
        "Experience with SEO tools (e.g., Ahrefs, SEMrush, Google Analytics)",
        "Excellent analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Professional development opportunities",
        "Flexible work hours"
      ]
    }
  },
  {
    title: "SEO Lead",
    experience: "5+ Years",
    positions: 1,
    qualification: "Any Graduate",
    details: {
      description: "We're seeking an experienced SEO Lead to drive our organic search strategy and lead our SEO team.",
      responsibilities: [
        "Lead and mentor the SEO team",
        "Develop and execute advanced SEO strategies",
        "Collaborate with cross-functional teams",
        "Drive continuous improvement in SEO performance"
      ],
      requirements: [
        "5+ years of SEO experience with proven results",
        "Experience leading and mentoring teams",
        "Deep understanding of technical SEO",
        "Strong project management skills"
      ],
      benefits: [
        "Leadership role with competitive compensation",
        "Comprehensive health benefits",
        "Stock options",
        "Remote work flexibility"
      ]
    }
  }
];

export default function Openings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const toggleJobDetails = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-[#4361EE]">We're Hiring!</span> Your skills are valued
          </h2>
          <p ref={contentRef} className="text-lg text-gray-300 max-w-3xl fade-up-element">
            Tesla is looking for talented and skilled professionals from the tech and design 
            domain to be a part of a revolutionary company that's shaping the future of technology.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            To apply for any of the below positions, email your updated resume/CV to{' '}
            <a href="mailto:careers@tesla.com" className="text-[#4361EE] hover:underline">
              careers@tesla.com
            </a>
          </p>
        </div>

        <div className="space-y-6">
          {openings.map((job, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-300"
            >
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
                      onClick={() => toggleJobDetails(index)}
                      className="flex items-center justify-center px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-300"
                    >
                      {expandedJob === index ? (
                        <>
                          Hide Details
                          <ChevronUp className="ml-2 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Details
                          <ChevronDown className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                    <button className="flex items-center justify-center px-6 py-2 bg-[#4361EE] rounded-full text-white hover:bg-[#3730A3] transition-colors duration-300">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>

                {expandedJob === index && (
                  <div className="mt-8 pt-6 border-t border-white/10">
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}