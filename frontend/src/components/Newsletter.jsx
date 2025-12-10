import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { subscribeNewsletter } from '../api/api';
import { FaEnvelope, FaArrowRight, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await subscribeNewsletter(email);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error(error. response?.data?.message || 'Error subscribing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Learn More Section with Background Image - Enhanced */}
      <section 
        className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("public/images/subs2.png")',
        }}
      >
        {/* Enhanced gradient overlay with better depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/70"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg: px-8 text-center">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-sm mb-8 border border-white/20">
            <FaCheckCircle className="text-accent" />
            <span>Discover Our Process</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            Learn more about our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent animate-pulse">
              listing process
            </span>
            , as well as our
            <br className="hidden md:block" />
            additional staging and design work. 
          </h2>

          {/* Enhanced description */}
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock the full potential of your property with our comprehensive services
          </p>

          {/* Enhanced button with icon and effects */}
          <button className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent/50 overflow-hidden">
            {/* Button shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            
            <span className="relative z-10">LEARN MORE</span>
            <FaArrowRight className="relative z-10 group-hover: translate-x-2 transition-transform duration-300" />
          </button>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Professional Staging</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <span>Expert Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <span>Premium Listings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe Section - Enhanced */}
      <section className="relative bg-gradient-to-r from-primary via-blue-600 to-blue-700 py-6 md:py-8 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left side - Enhanced Navigation links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {[
                { href: '#home', label: 'Home' },
                { href: '#services', label: 'Services' },
                { href: '#projects', label:  'Projects' },
                { href: '#clients', label: 'Testimonials' },
                { href: '#contact', label:  'Contact' }
              ].map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="group relative text-white font-semibold text-sm hover:text-accent transition-all duration-300 py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Right side - Enhanced Subscribe form */}
            <div className="flex flex-col sm: flex-row items-center gap-4 w-full lg:w-auto">
              {/* Enhanced label with icon */}
              <div className="flex items-center gap-2 text-white font-bold text-base whitespace-nowrap">
                <FaEnvelope className="text-accent text-xl animate-bounce" />
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  Subscribe to Our Newsletter
                </span>
              </div>

              {/* Enhanced form */}
              <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full sm:w-auto group">
                <div className="relative flex-1 sm:flex-initial">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-12 pr-4 py-3. 5 rounded-xl w-full sm:w-72 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-blue-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-300 hover: shadow-xl"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group/btn relative inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-500 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transform hover:scale-105 overflow-hidden"
                >
                  {/* Button shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></span>
                  
                  {loading ? (
                    <>
                      <div className="relative z-10 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="relative z-10">Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      <span className="relative z-10">Subscribe</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      </section>
    </>
  );
};

export default Newsletter;