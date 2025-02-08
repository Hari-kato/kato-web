"use client";

import Link from "next/link";
import Image from "next/image";
import { Code2, Mail, Phone } from "lucide-react";
import { footerLinks } from "@/data/footer/footerlinks";
import { socialLinks } from "@/data/footer/socialLinks";

export default function Footer() {
  return (
    <footer className="relative bg-[#2D3436] text-white pt-16 pb-8">
      {/* Background Images */}
      <Image
        src="/downwave.svg"
        alt="Down Wave"
        width={900}
        height={100}
        className="absolute bottom-0 left-0  "
      />
      <Image
        src="/upwave.svg"
        alt="Up Wave"
        width={800}
        height={100}
        className="absolute top-0 right-0  filter brightness-30"
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Code2 className="w-12 h-12" />
            </Link>
            <p className="text-secondary-light text-sm mb-4">
              Delivering excellence, righteously
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-secondary-light hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-light hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Tesla Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Why Tesla</h3>
            <ul className="space-y-3">
              {footerLinks.whyTesla.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-light hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-light hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Have Questions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Have Questions?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:enquiry.tesla"
                  className="hover:text-[#444] text-sm"
                >
                  +91 - 90123 45678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@tesla.com"
                  className="hover:text-[#444] text-sm"
                >
                  info@tesla.com
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-6">Careers?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:enquiry.tesla"
                  className="hover:text-[#444] text-sm"
                >
                  +91 - 90124 12356
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@tesla.com"
                  className="hover:text-[#444] text-sm"
                >
                  info@tesla.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
      <div className="pt-8 border-t border-secondary-light/20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-light text-center  text-sm mx-8 ">
            Copyright 2011-{new Date().getFullYear()}
          </p>
          <p className="text-secondary-light text-center  text-sm mx-8">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
