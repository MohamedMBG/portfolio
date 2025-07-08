import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Instagram, Upload, X, ExternalLink, Code, Palette, Smartphone, Star, Calendar, Award, User, Briefcase, Send } from 'lucide-react';

const FreelancerPortfolio = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [uploadedWorks, setUploadedWorks] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(true);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newWork = {
          id: Date.now() + Math.random(),
          title: file.name.split('.')[0],
          image: event.target.result,
          category: 'uploaded',
          description: 'Uploaded work'
        };
        setUploadedWorks(prev => [...prev, newWork]);
      };
      reader.readAsDataURL(file);
    });
    setShowUploadModal(false);
  };

  const removeWork = (id) => {
    setUploadedWorks(prev => prev.filter(work => work.id !== id));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message sent! I\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: 'Android Development', level: 90, icon: Smartphone, color: 'from-orange-400 to-orange-600' },
    { name: 'Kotlin', level: 85, icon: Code, color: 'from-blue-900 to-blue-700' },
    { name: 'Java', level: 80, icon: Code, color: 'from-orange-500 to-orange-600' },
    { name: 'UI/UX Design', level: 88, icon: Palette, color: 'from-gray-400 to-gray-600' },
    { name: 'Branding', level: 85, icon: Award, color: 'from-orange-400 to-orange-600' },
    { name: 'Graphic Design', level: 82, icon: Palette, color: 'from-blue-900 to-blue-700' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'BBUniversity - Java College Management',
      category: 'java',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      description: 'Complete college management system built with Java',
      github: 'https://github.com/MohamedMBG/BBUniversity',
      tech: 'Java'
    },
    {
      id: 2,
      title: 'UltimatePOS - Point of Sale System',
      category: 'php',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Advanced POS system with inventory management',
      github: 'https://github.com/MohamedMBG/UltimatePOS',
      tech: 'PHP'
    },
    {
      id: 3,
      title: 'Deadlines Manager - Android App',
      category: 'android',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      description: 'Kotlin-based deadline management application',
      github: 'https://github.com/MohamedMBG/deadlines-manager',
      tech: 'Kotlin'
    },
    {
      id: 4,
      title: 'Car Renting System',
      category: 'java',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop',
      description: 'Java-based car rental management system',
      github: 'https://github.com/MohamedMBG/CarRentingTest',
      tech: 'Java'
    },
    {
      id: 5,
      title: 'StockMaster - Python Inventory',
      category: 'python',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      description: 'Python-based stock management system',
      github: 'https://github.com/MohamedMBG/stockmaster',
      tech: 'Python'
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      description: 'HTML/CSS restaurant reservation system',
      github: 'https://github.com/MohamedMBG/restaurant_booking',
      tech: 'HTML/CSS'
    },
    {
      id: 7,
      title: 'Travel Dubai - Tourism Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      description: 'Tourism website for Dubai travel experiences',
      github: 'https://github.com/MohamedMBG/travel_dubai',
      tech: 'Web'
    },
    {
      id: 8,
      title: 'B&B Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop',
      description: 'CSS-based bed & breakfast management',
      github: 'https://github.com/MohamedMBG/b-b_management',
      tech: 'CSS'
    },
    ...uploadedWorks
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 mb-8"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-purple-300">Preparing amazing experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-40 border-b border-orange-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Baghdad Mohamed
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Hero', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-orange-400 ${
                    currentSection === item.toLowerCase() ? 'text-orange-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-blue-900/30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeInUp">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-blue-900 flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-pulse">
                BM
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Baghdad Mohamed
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 mb-4">
              Android Developer & Brand Designer
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              21 years old • 3 years experience in Android Development • 3 years experience in Branding & Design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white/90 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">Personal Info</span>
              </div>
              <p className="text-lg leading-relaxed">
                I'm Baghdad Mohamed, a passionate 21-year-old developer and designer with 3 years of experience 
                in Android development and branding. I specialize in creating beautiful, functional mobile 
                applications and compelling brand identities that leave lasting impressions.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>Age: 21</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-orange-400" />
                  <span>Experience: 3 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Location: Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-orange-400" />
                  <span>Projects: 50+</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-orange-500/20 to-blue-900/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-orange-500 to-blue-900 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                  BM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 -top-8 text-orange-400 font-semibold">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Upload className="w-5 h-5" />
              Upload New Work
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 border border-gray-700/50">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.category === 'android' ? 'bg-orange-500/20 text-orange-400' :
                      item.category === 'java' ? 'bg-blue-900/30 text-blue-400' :
                      item.category === 'php' ? 'bg-gray-500/20 text-gray-400' :
                      item.category === 'python' ? 'bg-orange-500/20 text-orange-400' :
                      item.category === 'web' ? 'bg-blue-900/30 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.tech || item.category}
                    </span>
                    <div className="flex gap-2">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {item.category === 'uploaded' && (
                        <button
                          onClick={() => removeWork(item.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-white/90">
                <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                <p className="text-lg mb-8">
                  Ready to bring your ideas to life? I'm here to help you create amazing 
                  mobile applications and stunning brand identities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-white/80">baghdad.mohamed@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-white/80">Available Worldwide</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Baghdad Mohamed. All rights reserved. Built with passion and creativity.
          </p>
        </div>
      </footer>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Upload New Work</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleWorkUpload}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700"
              />
              <p className="text-white/60 text-sm">
                Upload images of your work. Supported formats: JPG, PNG, GIF
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelancerPortfolio;