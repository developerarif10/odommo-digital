"use client"
import { motion } from 'framer-motion'
import { BarChart, Code, PenTool, Smartphone } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build pixel-perfect, high-performance websites using modern technologies like Next.js and React. Our code is clean, scalable, and SEO-friendly.",
    icon: Code,
    color: "bg-accent-blue"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centric design that looks beautiful and functions seamlessly. We create design systems, prototypes, and high-fidelity interfaces.",
    icon: PenTool,
    color: "bg-accent-violet"
  },
  {
    id: 3,
    title: "Digital Strategy",
    description: "Data-driven insights to grow your business. We help you define your digital roadmap and optimize your online presence for maximum impact.",
    icon: BarChart,
    color: "bg-accent-cyan"
  },
  {
    id: 4,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that provide a superior user experience on iOS and Android devices.",
    icon: Smartphone,
    color: "bg-pink-500"
  }
]

export default function WhatWeDo() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section id="what-we-do" className="py-24 container mx-auto px-6">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
        <p className="text-secondary text-lg">
          We offer a comprehensive suite of digital services to help your business thrive in the modern world.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
        {services.map((service) => (
          <motion.div
            key={service.id}
            layout
            onClick={() => setActiveId(service.id)}
            onHoverStart={() => setActiveId(service.id)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
              activeId === service.id ? 'flex-[3]' : 'flex-[1]'
            }`}
          >
            {/* Background Image/Gradient */}
            <div className={`absolute inset-0 ${service.color} opacity-10`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="mb-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <service.icon size={24} />
              </div>
              
              <motion.h3 
                layout="position"
                className={`text-2xl font-bold text-white mb-2 ${activeId !== service.id && 'lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-20 lg:left-8 lg:w-64 lg:mb-0'}`}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: activeId === service.id ? 1 : 0 }}
                className={`text-gray-300 ${activeId === service.id ? 'block' : 'hidden'}`}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
