import React from 'react'

const products = [
  { 
    id: 1, 
    name: 'Organic Salmon Kibble', 
    price: '$34', 
    originalPrice: '$42',
    category: 'Nutrition',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1601758123927-0c8f0e2e2f5f?q=80&w=800&auto=format&fit=crop',
    badge: 'Best Seller'
  },
  { 
    id: 2, 
    name: 'Premium Leather Leash', 
    price: '$48', 
    originalPrice: '$65',
    category: 'Accessories',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    badge: 'Premium'
  },
  { 
    id: 3, 
    name: 'Calming CBD Drops', 
    price: '$29', 
    originalPrice: '$39',
    category: 'Wellness',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1603398938378-2ceab6a7c5f6?q=80&w=800&auto=format&fit=crop',
    badge: 'Natural'
  },
  { 
    id: 4, 
    name: 'Luxury Pet Bed', 
    price: '$89', 
    originalPrice: '$120',
    category: 'Comfort',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1556228453-2d9bbef56e39?q=80&w=800&auto=format&fit=crop',
    badge: 'Luxury'
  },
]

export default function Products(){
  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
              Premium Pet Products
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Curated Products
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Your Pet Loves
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 lg:mb-0">
              Hand-picked premium products with expert recommendations and fast, reliable shipping.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 glass border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              View All Products
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              Shop by Category
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs bg-emerald-500 text-white rounded-full font-medium">
                    {product.badge}
                  </span>
                </div>
                
                {/* Quick Add Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-sm text-emerald-300 font-medium mb-2">
                  {product.category}
                </div>
                
                {/* Product Name */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">({product.rating})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trust Indicators */}
          <div className="glass p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Products?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-white">Veterinarian Approved</div>
                  <div className="text-sm text-slate-400">All products reviewed by our expert team</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                  🚚
                </div>
                <div>
                  <div className="font-semibold text-white">Fast & Free Shipping</div>
                  <div className="text-sm text-slate-400">Free delivery on orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                  💚
                </div>
                <div>
                  <div className="font-semibold text-white">30-Day Guarantee</div>
                  <div className="text-sm text-slate-400">Your pet's satisfaction guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="glass p-8 rounded-3xl border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Get exclusive offers, pet care tips, and product recommendations delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
