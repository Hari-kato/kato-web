'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Menu,
  X,
  Code2,
  Cpu,
  Camera,
  Smartphone,
  Globe,
  BrainCircuit as Circuit,
  Palette,
} from 'lucide-react';
import { blogPosts, featuredPost } from '@/data/blogs';

const menuItems = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Case Study', href: '/case-studies' },
  { label: 'Company', href: '#' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
];

const servicesLeft = [
  {
    icon: <Cpu className="w-5 h-5 text-blue-500" />,
    title: 'Generative AI',
    description: 'Transform your business with cutting-edge AI solutions',
    href: '/services/generative-ai',
  },
  {
    icon: <Camera className="w-5 h-5 text-red-500" />,
    title: 'Video Analytics',
    description: 'Gain insights from video data with advanced analytics',
    href: '/services/video-analytics',
  },
  {
    icon: <Smartphone className="w-5 h-5 text-green-500" />,
    title: 'Mobile App Development',
    description: 'Create powerful native and cross-platform apps',
    href: '/services/mobile-development',
  },
];

const servicesRight = [
  {
    icon: <Globe className="w-5 h-5 text-indigo-500" />,
    title: 'Web App Development',
    description: 'Build modern, scalable web applications',
    href: '/services/web-development',
  },
  {
    icon: <Circuit className="w-5 h-5 text-orange-500" />,
    title: 'IoT Development',
    description: 'Connect and manage smart devices seamlessly',
    href: '/services/iot-development',
  },
  {
    icon: <Palette className="w-5 h-5 text-blue-500" />,
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences',
    href: '/services/ui-ux-design',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get background color based on the current page
  const getHeaderBackground = () => {
    if (pathname === '/') {
      return 'bg-gradient-to-br from-[#4361EE] to-[#6366F1]';
    }
    if (pathname === '/careers') {
      return 'bg-gradient-to-br from-[#4CAF50] to-[#45a049]';
    }
    if (pathname === '/case-studies') {
      return 'bg-gradient-to-br from-[#4361EE] to-[#6366F1]';
    }
    if (pathname === '/blogs') {
      return 'bg-gradient-to-br from-[#4361EE] to-[#6366F1]';
    }

    // Check if it's a blog post page
    if (pathname.startsWith('/blogs/')) {
      const slug = pathname.split('/').pop();
      const allPosts = [featuredPost, ...blogPosts];
      const post = allPosts.find((post) => post.link.split('/').pop() === slug);
      if (post?.color) {
        return `bg-[${post.color}]`;
      }
    }

    return 'bg-white';
  };

  const headerBg = getHeaderBackground();

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : headerBg
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code2
              className={`w-10 h-10 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              TechPro
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                  onMouseEnter={() =>
                    item.hasDropdown && setIsServicesOpen(true)
                  }
                >
                  {item.label}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6 grid grid-cols-2 gap-6"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-[-2px_-2px_3px_-1px_rgba(0,0,0,0.1)]" />

                    {/* Left Column - Services */}
                    <div className="space-y-4">
                      {servicesLeft.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                        >
                          <div className="mt-1">{service.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                              {service.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {servicesRight.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                        >
                          <div className="mt-1">{service.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                              {service.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-600 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block py-3 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary-dark text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
