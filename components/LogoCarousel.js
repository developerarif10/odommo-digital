"use client"
import { FaAws, FaFigma, FaGoogle, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa'

const logos = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'AWS', icon: FaAws },
  { name: 'Figma', icon: FaFigma },
  { name: 'Google', icon: FaGoogle },
  { name: 'Stripe', icon: FaStripe },
]

export default function LogoCarousel() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm text-secondary uppercase tracking-widest">Trusted by innovative teams</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-3xl opacity-50 hover:opacity-100 grayscale hover:grayscale-0 duration-300">
              <logo.icon />
              <span className="text-xl font-bold hidden md:block">{logo.name}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center ml-16">
           {/* Duplicate for seamless loop - handled by CSS usually, but here we just render enough items */}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
