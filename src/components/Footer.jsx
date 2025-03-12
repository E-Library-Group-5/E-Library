import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-lg text-white pt-12 pb-8 border-t border-slate-700/30">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 to-slate-900/90 backdrop-blur-md z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-lg shadow-lg border border-slate-700/30">
            <h3 className="text-xl font-bold mb-4 text-white">
              City Public Library
            </h3>
            <p className="text-gray-300 mb-4">
              Serving our community with knowledge and resources since 1952. Our
              mission is to promote literacy, lifelong learning, and cultural
              enrichment for all residents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white p-2">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white p-2">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white p-2">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-lg shadow-lg border border-slate-700/30">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Catalog Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Events Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Digital Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Research Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-lg shadow-lg border border-slate-700/30">
            <h3 className="text-xl font-bold mb-4 text-white">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">
                  Monday - Friday: 9:00 AM - 8:00 PM
                </span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">
                  Saturday: 10:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300">
                  Sunday: 12:00 PM - 5:00 PM
                </span>
              </li>
              <li className="mt-4 text-gray-400">
                <p>* Special hours may apply on holidays</p>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-lg shadow-lg border border-slate-700/30">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-300">
                  123 Reading Avenue
                  <br />
                  Booktown, BT 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">
                  info@citypubliclibrary.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-slate-700/30 my-8 pt-8">
          <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-lg shadow-lg border border-slate-700/30">
            <div className="md:flex items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h4 className="text-lg font-bold mb-2 text-white">
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-gray-300">
                  Stay updated with new arrivals, events, and reading
                  recommendations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-slate-700/60 backdrop-blur-sm text-white rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2 sm:mb-0 border border-slate-600/30"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r font-medium transition-colors text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/30 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} City Public Library. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white mb-2 md:mb-0"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white mb-2 md:mb-0"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white mb-2 md:mb-0"
              >
                Accessibility
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
