'use client';

import {
  Briefcase,
  Users,
  CheckCircle,
  ThumbsUp,
  Globe,
  UserCheck,
  Cpu,
  MessageSquare,
} from 'lucide-react';

const stats = [
  {
    icon: <Briefcase className="w-12 h-12 text-[#1f72b7]" />,
    number: '15+',
    label: 'Years of experience',
  },
  {
    icon: <Users className="w-12 h-12 text-[#1f72b7]" />,
    number: '200+',
    label: 'Skilled talent',
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-[#1f72b7]" />,
    number: '800+',
    label: 'Projects delivered',
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-[#1f72b7]" />,
    number: '95%',
    label: 'Client satisfaction rate',
  },
  {
    icon: <Globe className="w-12 h-12 text-[#1f72b7]" />,
    number: '45+',
    label: 'Clients in countries',
  },
];

const features = [
  {
    icon: <UserCheck className="w-16 h-16 text-[#1f72b7]" />,
    title: 'Experienced team',
    description:
      'Our team of seasoned developers brings decades of combined experience in delivering innovative solutions across diverse industries, ensuring your project benefits from deep technical expertise and industry best practices.',
  },
  {
    icon: <Cpu className="w-16 h-16 text-[#1f72b7]" />,
    title: 'Technological competitive edge',
    description:
      'We stay at the forefront of technology, mastering emerging tools and frameworks to deliver cutting-edge solutions that give our clients a competitive advantage in their respective markets.',
  },
  {
    icon: <MessageSquare className="w-16 h-16 text-[#1f72b7]" />,
    title: 'Effective communication',
    description:
      "We believe in complete transparency and maintain clear, consistent communication throughout your project's lifecycle, ensuring you're always informed and involved in the development process.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why we stand out as a{' '}
            <span className="text-[#1f72b7]">software development company</span>
            ?
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            While numbers tell part of our story, our commitment to excellence
            sets us apart. Our rigorous coding standards, continuous innovation,
            and client-first approach make us the ideal partner for your
            software development needs. Here's what makes us exceptional:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
