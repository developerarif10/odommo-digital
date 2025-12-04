"use client"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-violet/10 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-secondary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences</span> That Matter.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We help forward-thinking brands build professional, high-converting websites that leave a lasting impression.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/contact" 
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#work" 
              className="px-8 py-4 rounded-full font-medium text-lg text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary text-sm"
      >
        <span>Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  )
}
