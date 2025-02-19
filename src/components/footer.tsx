"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Youtube } from "lucide-react"
import { Twitter } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "FAQs", href: "/faqs" },
  { name: "Price Plan", href: "/pricing" },
  { name: "Features", href: "/features" },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Products", href: "/products" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="bg-[#a2d2ff] rounded-3xl p-8 text-black">
            <div className="flex items-center mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <span className="text-xl font-semibold">Flokana</span>
            </div>
            <p className="text-sm mb-8 opacity-90">
              Trusted in more than 100 countries & 5 million customers. Have any query? contact us we are here for you.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-600">support@pagedone.com</p>
              <p className="text-gray-600">+91 945 658 3256</p>
              <p className="text-gray-600">61-A, Elm street, Gujarat, India.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 max-w-md gap-x-4">
                <Input type="email" placeholder="Enter email.." className="bg-gray-50" />
                <Button className="bg-[#a2d2ff] hover:bg-[#a2d2ff] text-black">
                  Subscribe
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-sm text-gray-600">Copyright@2023 All Right Reserved Pagedone.</p>
      </div>
    </footer>
  )
}

