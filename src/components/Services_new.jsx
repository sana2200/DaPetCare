import React from 'react'

const services = [
  {
    title: 'Veterinary Consultations',
    desc: 'Comprehensive health examinations, advanced diagnostics, and personalized treatment plans by our licensed veterinarians.',
    icon: '🩺',
    color: 'emerald',
    features: ['Health Checkups', 'Diagnostics', 'Treatment Plans']
  },
  {
    title: 'Emergency & Surgery',
    desc: 'State-of-the-art surgical facilities with 24/7 emergency care for critical situations and complex procedures.',
    icon: '🏥',
    color: 'red',
    features: ['24/7 Emergency', 'Advanced Surgery', 'Critical Care']
  },
  {
    title: 'Luxury Grooming',
    desc: 'Premium spa treatments including therapeutic baths, nail care, and styling in our calming environment.',
    icon: '🛁',
    color: 'blue',
    features: ['Therapeutic Baths', 'Nail Care', 'Premium Styling']
  },
  {
    title: 'Wellness Plans',
    desc: 'Customized preventive care subscriptions tailored to your pet\'s age, breed, and specific health needs.',
    icon: '💚',
    color: 'teal',
    features: ['Preventive Care', 'Custom Plans', 'Health Monitoring']
  }
]

export default function Services(){
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
            Our Premium Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Exceptional Care for
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Every Pet
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From routine wellness visits to emergency surgery, our expert team delivers compassionate, 
            comprehensive care with cutting-edge medical technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-emerald-300 font-medium">Service {String(index + 1).padStart(2, '0')}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1 text-xs bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105">
                  Book Service
                </button>
                <button className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-3xl border border-emerald-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which service your pet needs?
            </h3>
            <p className="text-slate-300 mb-6">
              Schedule a consultation with our expert veterinarians for personalized recommendations.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
