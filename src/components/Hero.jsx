import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Premium Pet Healthcare
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                Your Pet's
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Wellness
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Experience premium veterinary care combined with luxury pet products. 
              Where expertise meets compassion for your beloved companions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="px-8 py-4 glass border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>

          {/* Premium Visual */}
          <div className="relative">
            <div className="relative glass p-8 rounded-3xl shadow-2xl">
              {/* Floating Cards - Centered 3-card layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="glass p-4 rounded-2xl border border-emerald-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" 
                    alt="Premium cat care" 
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="mt-3">
                    <div className="text-sm font-semibold text-emerald-300">Feline Care</div>
                    <div className="text-xs text-slate-400">Specialized treatments</div>
                  </div>
                </div>
                
                <div className="glass p-4 rounded-2xl border border-teal-500/20">
                  <div className="flex items-center justify-center h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                    <span className="text-4xl">🏥</span>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-semibold text-teal-300">Emergency</div>
                    <div className="text-xs text-slate-400">24/7 availability</div>
                  </div>
                </div>

                <div className="glass p-4 rounded-2xl border border-emerald-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop" 
                    alt="Premium dog care" 
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="mt-3">
                    <div className="text-sm font-semibold text-emerald-300">Canine Care</div>
                    <div className="text-xs text-slate-400">Expert veterinarians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
