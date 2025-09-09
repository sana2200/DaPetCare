import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl"></div>
      
      {/* Main Footer */}
      <div className="relative py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">🐾</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    DaPetCare
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">Premium Pet Care</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
                Your trusted partner in pet wellness. We combine expert veterinary care with premium products 
                to ensure your beloved companions live their happiest, healthiest lives.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <button 
                    key={social}
                    className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <span className="text-sm font-medium">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-4">
                {['Home', 'Services', 'Products', 'About Us', 'Emergency Care', 'Appointment'].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="block text-slate-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-6">
                {/* Hours */}
                <div>
                  <h5 className="font-semibold text-emerald-300 mb-2">Business Hours</h5>
                  <div className="text-sm text-slate-400 space-y-1">
                    <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                    <div>Saturday: 9:00 AM - 6:00 PM</div>
                    <div>Sunday: 10:00 AM - 4:00 PM</div>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h5 className="font-semibold text-emerald-300 mb-2">Contact</h5>
                  <div className="text-sm text-slate-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <span>📞</span>
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✉️</span>
                      <span>hello@dapetcare.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>123 Pet Care Ave, City, ST 12345</span>
                    </div>
                  </div>
                </div>

                {/* Emergency */}
                <div className="glass p-4 rounded-2xl border border-red-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-red-300 text-sm">24/7 Emergency</div>
                      <div className="text-white font-bold">(555) 911-PETS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400">
              © 2024 DaPetCare. All rights reserved. Made with 💚 for pets and their families.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-emerald-300 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-emerald-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
