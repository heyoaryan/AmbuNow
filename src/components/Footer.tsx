import React from 'react';
import { Activity, Heart, Shield, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 md:mb-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">AmbuNow</span>
                <div className="text-xs md:text-sm text-gray-400 font-medium">AI Emergency Response</div>
              </div>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Revolutionizing emergency healthcare through AI-powered ambulance allocation. 
              Every second saved is a life preserved.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <div className="flex items-center space-x-1 md:space-x-2 text-red-400">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Lives First</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2 text-blue-400">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Always Secure</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2 text-green-400">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">24/7 Ready</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-red-400 transition-colors">How It Works</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-red-400 transition-colors">Impact</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Resources</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Integration Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-gray-400 text-xs md:text-sm mb-2 md:mb-0 text-center md:text-left">
              © 2025 AmbuNow. All rights reserved. Saving lives through technology.
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;