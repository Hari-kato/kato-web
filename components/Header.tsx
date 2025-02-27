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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderBackground = () => {
    if (pathname === "/") return "bg-secondary";
    if (pathname === "/careers") return "bg-gradient-careers-light";
    if (pathname === "/case-studies") return "bg-secondary";
    if (pathname === "/blogs") return "bg-secondary";
    if (pathname === "/about-us") return "bg-gradient-about-header";
    if (pathname === "/contact-us") return "bg-secondary";

    if (pathname.startsWith("/blogs/")) {
      const slug = pathname.split("/").pop();
      const allPosts = [featuredPost, ...blogPosts];
      const post = allPosts.find((post) => post.link.split("/").pop() === slug);
      if (post?.color) return `bg-[${post.color}]`;
    }

    return "bg-secondary";
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : getHeaderBackground()
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
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`relative z-10 font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-600 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>

                {item.hasDropdown && (
                  <div className="absolute shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 left-1/2 -translate-x-1/2 pt-4 w-[800px]">
                    <div className="absolute inset-0 -top-4" />

                    <div className="relative bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6">
                      <div className="absolute  -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45  shadow-[-2px_-2px_3px_-1px_rgba(0,0,0,0.1)]" />

                      <div className="space-y-4">
                        {servicesLeft.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200 group menu-item"
                          >
                            <div className="mt-1">{service.icon}</div>
                            <div>
                              <h4 className="font-medium">{service.title}</h4>
                              <p className="text-sm text-gray-600">
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
                            className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200 group menu-item"
                          >
                            <div className="mt-1">{service.icon}</div>
                            <div>
                              <h4 className="font-medium">{service.title}</h4>
                              <p className="text-sm text-gray-600">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <AnimatedButton
              label="Contact Us"
              href="/contact-us"
              isScrolled={isScrolled}
              customClass="px-4 py-2"
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
