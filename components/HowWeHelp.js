"use client"
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function HowWeHelp() {
  const benefits = [
    "Strategic Digital Consulting",
    "High-Performance Web Development",
    "User-Centric Design Systems",
    "SEO & Conversion Optimization"
  ]

  return (
    <section id="how-we-help" className="py-24 bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-sm font-medium mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Helping You Navigate the <span className="text-gradient">Digital Landscape</span>
            </h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              We don't just build websites; we build digital solutions that solve real business problems. From the initial concept to the final launch, we partner with you to ensure your vision becomes a reality.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-accent-cyan w-6 h-6" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Start Your Project
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10">
              {/* Placeholder for an abstract or team image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-violet/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 bg-accent-cyan/30 rounded-full blur-[100px]" />
              </div>
              
              {/* Floating Cards Effect */}
              <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Project Success</h4>
                    <p className="text-xs text-secondary">On time & on budget</p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-green-500" />
                </div>
              </div>

              <div className="absolute bottom-20 left-10 bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-xs transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 <h4 className="text-3xl font-bold mb-1">98%</h4>
                 <p className="text-sm text-secondary">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
