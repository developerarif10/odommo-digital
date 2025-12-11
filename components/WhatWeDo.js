"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import SelectionLabel from './SelectionLabel'
import Button from './mycomponent/Button'
import RightArrow from './mycomponent/RightArrow'

const services = [
  {
    id: 1,
    title: "Brand Identity Design",
    hook: "Stop Being Forgettable. Start Being Unforgettable.",
    description: "Your brand is your first impression, your reputation, and your promise—all rolled into one. If your branding feels generic or outdated, you're losing customers before they even consider your offer.",
    whatYouGet: "A complete brand identity system that positions you as the obvious choice in your market. From strategic logo design to comprehensive brand guidelines, color systems, typography, and visual assets—everything works together to build instant recognition and trust.",
    result: "A cohesive, professional brand that attracts your ideal customers and commands premium pricing.",
    cta: "Build Your Brand Identity",
    link: "/contact",
    timeline: "2 - 4 weeks"
  },
  {
    id: 2,
    title: "Website Design & Development",
    hook: "Your Website Should Work as Hard as You Do.",
    description: "74% of visitors judge your credibility based on your website design. If your site is slow, outdated, or confusing—you're hemorrhaging potential customers every single day.",
    whatYouGet: "Fast, mobile-optimized, conversion-focused websites built for performance and growth. We design stunning user experiences and develop rock-solid websites that load in under 3 seconds, rank on Google, and turn visitors into paying customers.",
    result: "A high-performing website that generates leads 24/7 while you sleep.",
    cta: "Get Your Website Audit",
    link: "/contact",
    timeline: "3 - 6 weeks"
  },
  {
    id: 3,
    title: "UI/UX Design",
    hook: "Beautiful Design That Actually Converts.",
    description: "Great design isn't just about looking good—it's about guiding users effortlessly toward taking action. If visitors land on your site and leave confused, your design is costing you money.",
    whatYouGet: "User-centered interface design that combines psychology, aesthetics, and strategy. We create intuitive navigation, seamless user flows, and engaging interactions that reduce friction and increase conversions.",
    result: "A website experience so smooth that visitors naturally become customers without thinking twice.",
    cta: "Improve Your User Experience",
    link: "/contact",
    timeline: "2 - 5 weeks"
  },
  {
    id: 4,
    title: "Video Editing & Content",
    hook: "Stand Out Where Attention Spans Are Shortest.",
    description: "Video content gets 1200% more shares than text and images combined. If you're not leveraging video, you're invisible on social media—and your competitors are eating your lunch.",
    whatYouGet: "Professionally edited video content that stops the scroll and drives engagement. From social media reels and promotional videos to testimonials and product showcases—we create thumb-stopping content that gets watched, shared, and remembered.",
    result: "Increased brand visibility, higher engagement rates, and content that actually converts viewers into customers.",
    cta: "Start Creating Scroll-Stopping Content",
    link: "/contact",
    timeline: "1 - 3 weeks"
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    hook: "Get Found. Get Chosen. Get Results.",
    description: "Having a beautiful website means nothing if nobody sees it. Without the right digital marketing strategy, you're just another invisible business hoping someone stumbles across you.",
    whatYouGet: "Data-driven digital marketing that puts your business in front of the right people at the right time. From SEO and content strategy to social media marketing and paid advertising—we create campaigns that generate measurable ROI.",
    result: "More traffic, more leads, more sales—and a predictable system for growing your business online.",
    cta: "Grow Your Online Presence",
    link: "/contact",
    timeline: "Ongoing"
  }
]


export default function WhatWeDo() {
  const [activeId, setActiveId] = useState(1)

   const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  }
 const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

    const words = "We specialize in creating bold, high-impact digital experiences that set brands apart.".split(" ")


  return (
    <section id="what-we-do" className="transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        

        {/* Header - Redesigned V2: Label - Title - Description */}
        <div className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-6 md:gap-8 mb-2 md:mb-8 pb-2 md:pb-8">
          {/* Left: Services Label */}
          <div className="flex items-center gap-2 justify-self-start">
            <SelectionLabel text="Services" />
          </div>
          
          {/* Center: Title */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[0.9] justify-self-start">
            <span className="">What we </span>
            <span className="text-zinc-400 dark:text-zinc-600">offer.</span>
          </h2>
            
          {/* Right: Description */}
         <motion.h2
        initial="hidden"
        animate="visible"
        className='mb-6'
        variants={fadeInVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="inline-block mr-1 text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed md:text-right justify-self-end">
            {word}
          </motion.span>
        ))} </motion.h2>
        

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          
          {/* Left Column: Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className="relative cursor-pointer group"
              >
                <div className={`relative z-10 px-6 py-6 flex items-center gap-6 rounded-2xl transition-colors duration-500 ${
                  activeId === service.id 
                    ? 'text-black dark:text-white' 
                    : 'text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-zinc-300'
                }`}>
                  {/* Active Background Pill */}
                  {activeId === service.id && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-2xl"
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}

                  <span className={`relative z-10 text-base font-medium font-mono ${activeId === service.id ? 'text-zinc-600 dark:text-zinc-400' : ''}`}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <div className="relative z-10 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Details Card (Sticky on Desktop) */}
          <div className="lg:min-h-[500px] lg:sticky lg:top-32">
             <div className="relative h-full">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeId}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.3 }}
                   className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 md:p-10 flex flex-col justify-between h-auto min-h-[500px]"
                 >
                   <div className="space-y-6">
                     {/* Hook */}
                     <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white leading-tight">
                       {services.find(s => s.id === activeId)?.hook}
                     </h3>

                     {/* Description */}
                     <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                       {services.find(s => s.id === activeId)?.description}
                     </p>
                     
                     {/* What You Get & Result */}
                     <div className="space-y-4 pt-4">
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-base md:text-lg mb-1">What You Get:</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                                {services.find(s => s.id === activeId)?.whatYouGet}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-base md:text-lg mb-1">The Result:</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                                {services.find(s => s.id === activeId)?.result}
                            </p>
                        </div>
                     </div>
                   </div>
                   
                   <div className="pt-8 mt-4">
                     <Link 
                       href={services.find(s => s.id === activeId)?.link || '/contact'}
                       className="inline-flex items-center gap-2 text-black dark:text-white font-medium text-base hover:underline underline-offset-4 decoration-2 decoration-zinc-900 dark:decoration-zinc-100 transition-all group"
                     >
                       {services.find(s => s.id === activeId)?.cta}
                       <span className="group-hover:translate-x-1 transition-transform">→</span>
                     </Link>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>

        </div>

        {/* Digital CTA Section */}
        <div className="my-12 md:my-20 max-w-4xl mx-auto text-center space-y-8 bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Not Sure Where to Start?
                </h3>
                <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Every business is different. Let's talk about your goals and create a custom digital strategy that actually moves the needle for your specific situation.
                </p>
            </div>
            
            <div className="flex justify-center">
                 <Button 
                    href="/contact"
                    className="bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200"
                 >
                  <span className="flex items-center gap-2">  Book Your Free Strategy Session <RightArrow/></span>
                 </Button>
            </div>
        </div>

      </div>
    </section>
  )
}
