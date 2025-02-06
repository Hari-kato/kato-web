"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { blogPosts, featuredPost } from "@/data/blogs";
import {
  menuItems,
  servicesLeft,
  servicesRight,
} from "@/data/header.ts/menuItems";
import AnimatedButton from "./ui/AnimatedButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll state without using window.addEventListener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Initial scroll state check
    handleScroll();

    // Add the scroll event listener directly
    const onScroll = () => {
      handleScroll();
    };

    // Monitor scroll position using `scroll` event
    window.onscroll = onScroll;

    return () => {
      // Clean up the scroll event listener
      window.onscroll = null;
    };
  }, []);

  // Get background color based on the current page
  const getHeaderBackground = () => {
    if (pathname === "/") {
      return "bg-secondary";
    }
    if (pathname === "/careers") {
      return "bg-gradient-careers";
    }
    if (pathname === "/case-studies") {
      return "bg-secondary";
    }
    if (pathname === "/blogs") {
      return "bg-secondary";
    }
    if (pathname === "/about-us") {
      return "bg-gradient-about-header";
    }
    if (pathname === "/contact-us") {
      return "bg-secondary";
    }

    if (pathname.startsWith("/blogs/")) {
      const slug = pathname.split("/").pop();
      const allPosts = [featuredPost, ...blogPosts];
      const post = allPosts.find((post) => post.link.split("/").pop() === slug);

      if (post?.color) {
        return `bg-[${post.color}]`;
      }
    }

    return "bg-secondary";
  };

  const headerBg = getHeaderBackground();

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : headerBg
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code2
              className={`w-10 h-10 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              TechPro
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() =>
                  item.hasDropdown && setIsServicesOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-600 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>

                {/* Invisible bridge to prevent flickering when moving cursor */}
                {item.hasDropdown && isServicesOpen && (
                  <div
                    className="absolute left-0 w-full h-4" // Height of the gap
                    style={{ top: "100%" }} // Position it right below the menu item
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  />
                )}

                {item.hasDropdown && isServicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6 grid grid-cols-2 gap-6"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Dropdown Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-[-2px_-2px_3px_-1px_rgba(0,0,0,0.1)]" />

                    {/* Left Column - Services */}
                    <div className="space-y-4">
                      {servicesLeft.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
                        >
                          <div className="mt-1">{service.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-900  transition-colors duration-200">
                              {service.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column - Services */}
                    <div className="space-y-4">
                      {servicesRight.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                        >
                          <div className="mt-1">{service.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-900 hover:text-primary transition-colors duration-200">
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
            <AnimatedButton
              label="Contact Us"
              href="/contact-us"
              customClass="px-6 py-2.5"
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-gray-600" : "text-white"
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
