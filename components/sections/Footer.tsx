import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 dark:bg-black text-gray-300 pt-12 sm:pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-lama rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-xl font-bold text-white"> Fast Group</span>
              </div>
              <p className="text-sm mb-4">
                Learn from the world&apos;s best! Get Started Now. Our LMS System is 100% educational.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded flex items-center justify-center hover:bg-lama transition">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded flex items-center justify-center hover:bg-lama transition">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded flex items-center justify-center hover:bg-lama transition">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded flex items-center justify-center hover:bg-lama transition">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">GET HELP</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-lama transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-lama transition">Latest Articles</a></li>
                <li><a href="#" className="hover:text-lama transition">FAQ</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">PROGRAMS</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-lama transition">Art & Design</a></li>
                <li><a href="#" className="hover:text-lama transition">Business</a></li>
                <li><a href="#" className="hover:text-lama transition">IT & Software</a></li>
                <li><a href="#" className="hover:text-lama transition">Languages</a></li>
                <li><a href="#" className="hover:text-lama transition">Programming</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">CONTACT US</h4>
              <ul className="space-y-3 text-sm">
                <li>Address: 2321 New Design Str, Lorem Ipsum, USA</li>
                <li>Tel: + (123) 2500-567-8988</li>
                <li>Mail: supportlms@gmail.com</li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              Copyright © 2025 <span className="text-lama-500"> Fast Groups</span> | Powered By X  Fast Group
            </p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
  
