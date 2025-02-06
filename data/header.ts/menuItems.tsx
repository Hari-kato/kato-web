import {
  Cpu,
  Camera,
  Smartphone,
  Globe,
  BrainCircuit as Circuit,
  Palette,
} from 'lucide-react';
export const menuItems = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Case Study', href: '/case-studies' },
  { label: 'Company', href: '/about-us' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
];

export const servicesLeft = [
  {
    icon: <Cpu className="w-5 h-5 icon-blue" />,
    title: 'Generative AI',
    description: 'Transform your business with cutting-edge AI solutions',
    href: '/services/gen-ai',
  },
  {
    icon: <Camera className="w-5 h-5 icon-red" />,
    title: 'Video Analytics',
    description: 'Gain insights from video data with advanced analytics',
    href: '/services/video-analytics',
  },
  {
    icon: <Smartphone className="w-5 h-5 icon-green" />,
    title: 'Mobile App Development',
    description: 'Create powerful native and cross-platform apps',
    href: '/services/mobile-development',
  },
];

export const servicesRight = [
  {
    icon: <Globe className="w-5 h-5 icon-indigo" />,
    title: 'Web App Development',
    description: 'Build modern, scalable web applications',
    href: '/services/web-development',
  },
  {
    icon: <Circuit className="w-5 h-5 icon-orange" />,
    title: 'IoT Development',
    description: 'Connect and manage smart devices seamlessly',
    href: '/services/iot-development',
  },
  {
    icon: <Palette className="w-5 h-5 icon-blue" />,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences',
    href: '/services/ui-ux-design',
  },
];
