import React from 'react';
import { Mountain, Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Aptitude Test', href: '#aptitude' },
    { name: 'Career Paths', href: '#careers' },
    { name: 'College Directory', href: '#colleges' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Analytics', href: '#analytics' }
  ];

  const resources = [
    { name: 'Admission Guidelines', href: '#' },
    { name: 'Scholarship Information', href: '#' },
    { name: 'Career Counseling', href: '#' },
    { name: 'Study Materials', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  const governmentLinks = [
    { name: 'J&K Higher Education Dept.', href: '#' },
    { name: 'JKBOSE', href: '#' },
    { name: 'J&K Government Portal', href: '#' },
    { name: 'Digital India', href: '#' },
    { name: 'Skill Development', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-kashmir-blue-900 via-kashmir-blue-800 to-mountain-green-900 text-white">
      {/* Wave Pattern */}
      <div className="w-full h-20 bg-gradient-to-r from-saffron-400 via-chinar-orange-500 to-saffron-500 relative">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-15.918 8.293l15.918-15.918 15.918 15.918c-2.45 2.45-5.739 3.96-9.418 3.96s-6.968-1.51-9.418-3.96zm0-16.586c2.45-2.45 5.739-3.96 9.418-3.96s6.968 1.51 9.418 3.96L20 23.625 4.082 11.707z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-6">
            <path 
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
              className="fill-kashmir-blue-900"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-lg flex items-center justify-center">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">J&K Career Advisor</h3>
                <p className="text-sm text-kashmir-blue-300">Smart Education Initiative</p>
              </div>
            </div>
            <p className="text-kashmir-blue-300 mb-6 leading-relaxed">
              Empowering students across Jammu & Kashmir with data-driven career guidance 
              and personalized educational pathways.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-saffron-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-saffron-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-kashmir-blue-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-saffron-300">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-kashmir-blue-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-saffron-300">Government Portal</h4>
            <ul className="space-y-3 mb-8">
              {governmentLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-kashmir-blue-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-saffron-400" />
                <span className="text-sm text-kashmir-blue-300">help@jkcareeradvisor.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-saffron-400" />
                <span className="text-sm text-kashmir-blue-300">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-saffron-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-kashmir-blue-300">
                  Higher Education Department<br />
                  Government of Jammu & Kashmir
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-kashmir-blue-300 text-sm">
                © 2025 Government of Jammu & Kashmir. All rights reserved.
              </p>
              <p className="text-kashmir-blue-400 text-xs mt-1">
                Developed under Smart India Hackathon initiative
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-kashmir-blue-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 opacity-10">
        <div className="w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-5">
        <div className="w-24 h-24 border-2 border-saffron-400 rounded-full animate-bounce"></div>
      </div>
    </footer>
  );
};

export default Footer;