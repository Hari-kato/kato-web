import {
  Cpu,
  Camera,
  Smartphone,
  Globe,
  BrainCircuit as Circuit,
  Palette,
} from 'lucide-react';

export const headings = {
  tag: 'Our Services',
  title: ['Innovate', 'solutions', 'for tomorrow'],
  subtitle:
    'We provide cutting-edge solutions to help businesses thrive in the digital era.',
};

export const services = [
  {
    icon: <Cpu className="w-12 h-12 text-[#4285F4]" />,
    title: 'Generative AI',
    description:
      'Harness the power of cutting-edge AI models for your business needs. Create intelligent solutions that automate complex tasks and generate innovative content. Transform your operations with AI-driven decision making.',
    learnMoreLink: '#',
    iconBg: 'bg-blue-50',
    url: '/services/gen-ai',
  },
  {
    icon: <Camera className="w-12 h-12 text-[#FF5252]" />,
    title: 'Video Analytics',
    description:
      'Advanced video processing and real-time analytics for actionable insights. Implement intelligent surveillance and monitoring solutions. Extract valuable data from video streams with machine learning.',
    learnMoreLink: '#',
    iconBg: 'bg-red-50',
    url: '/services/video-analytics',
  },
  {
    icon: <Smartphone className="w-12 h-12 text-[#34A853]" />,
    title: 'Mobile App Development',
    description:
      'Create stunning native and cross-platform mobile applications. Deliver seamless user experiences across iOS and Android platforms. Build scalable and performance-optimized mobile solutions.',
    learnMoreLink: '#',
    iconBg: 'bg-green-50',
    url: '/services/mobile-development',
  },
  {
    icon: <Globe className="w-12 h-12 text-[#4A90E2]" />,
    title: 'Web App Development',
    description:
      'Develop modern, responsive web applications using cutting-edge technologies. Create scalable solutions that work across all devices and browsers. Implement robust security and performance optimization.',
    learnMoreLink: '#',
    iconBg: 'bg-indigo-50',
    url: '/services/web-development',
  },
  {
    icon: <Circuit className="w-12 h-12 text-[#FF6B3D]" />,
    title: 'IoT Development',
    description:
      'Connect and manage smart devices with custom IoT solutions. Implement secure data collection and real-time monitoring systems. Create scalable IoT infrastructure for enterprise applications.',
    learnMoreLink: '#',
    iconBg: 'bg-orange-50',
    url: '/services/iot-development',
  },
  {
    icon: <Palette className="w-12 h-12 text-[#2196F3]" />,
    title: 'UI/UX Design',
    description:
      'Create intuitive and engaging user interfaces for digital products. Design seamless user experiences based on research and best practices. Develop consistent design systems and brand guidelines.',
    learnMoreLink: '#',
    iconBg: 'bg-blue-50',
    url: '/services/ui-ux-design',
  },
];
