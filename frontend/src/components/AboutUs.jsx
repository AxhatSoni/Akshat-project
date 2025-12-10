import React from 'react';
import { FaRocket, FaUsers, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-tl from-accent/10 to-blue-50/40 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-primary/20 rounded-full blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-2xl opacity-60"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg: px-8 relative z-10">
        {/* Enhanced Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-100/50 text-primary font-semibold rounded-full text-sm mb-6 backdrop-blur-sm border border-primary/20">
            <FaLightbulb className="text-accent animate-pulse" />
            <span>Who We Are</span>
          </div>

          {/* Main Heading with Gradient */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent">
              About Us
            </span>
          </h2>

          {/* Enhanced Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-blue-500 to-accent rounded-full shadow-lg shadow-primary/30"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-accent rounded-full"></div>
          </div>

          {/* Stats Bar - New Addition */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mb-2">15+</div>
              <div className="text-sm font-semibold text-gray-600">Years Experience</div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500 mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-600">Projects Done</div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">100%</div>
              <div className="text-sm font-semibold text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Enhanced Description Text */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 mb-10">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              <span className="text-primary font-bold">Fifteen years</span> of exceptional design, development, and marketing excellence.  
              As a <span className="text-accent font-semibold">customer-centric digital solutions company</span>, we excel at brand-based work, 
              delivering tailored strategies that drive client success.  Our services include{' '}
              <span className="font-semibold text-gray-800">web design, mobile app development, and social media management</span>. 
              We're dedicated to understanding your unique needs and providing results-driven solutions by combining 
              <span className="text-primary font-semibold"> creativity and strategy</span>.
            </p>
          </div>

          {/* Icon Features - New Addition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300 shadow-lg">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Innovation Driven</h3>
              <p className="text-sm text-gray-600 text-center">Cutting-edge solutions for modern challenges</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-accent/5 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Client Focused</h3>
              <p className="text-sm text-gray-600 text-center">Your success is our top priority</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-primary/5 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Creative Excellence</h3>
              <p className="text-sm text-gray-600 text-center">Unique designs that make you stand out</p>
            </div>
          </div>

          {/* Enhanced Button */}
          <button className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-transparent bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            {/* Button background animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            <span className="relative z-10">LEARN MORE</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Optional:  Trust indicator */}
          <p className="mt-8 text-sm text-gray-500 font-medium">
            Trusted by leading brands worldwide 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;