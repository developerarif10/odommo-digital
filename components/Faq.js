'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import SelectionLabel from './SelectionLabel'
import RightArrow from './mycomponent/RightArrow'
import UnderlineToBackground from './mycomponent/underline-to-background'

const Highlight = ({ children, className = "" }) => (
  <span className={`bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded-md font-medium text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 ${className}`}>
    {children}
  </span>
);

const faqs = [
  {
    question: "How much does a website cost?",
    answer: (
      <div className="space-y-6">
        <p>We believe in transparent pricing. For local Bangladeshi businesses, we have 3 clear packages:</p>
        
        <div className="space-y-4">
          <div className="p-4 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
            <h4 className="font-semibold text-lg mb-1">Startup / Portfolio <Highlight>15,000 - 25,000 BDT</Highlight></h4>
            <p className="text-sm">A clean, one-page or 3-page site to establish credibility. Perfect for personal brands or small service providers.</p>
          </div>

          <div className="p-4 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
            <h4 className="font-semibold text-lg mb-1">Business Standard <Highlight>30,000 - 50,000 BDT</Highlight></h4>
            <p className="text-sm">The most popular choice. 5-10 pages, SEO-ready, dynamic design, and easy for you to edit.</p>
          </div>

          <div className="p-4 bg-zinc-50/50 dark:bg-zinc-800/20 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
            <h4 className="font-semibold text-lg mb-1">E-Commerce / Custom <Highlight>60,000 BDT+</Highlight></h4>
            <p className="text-sm">Online store with payment gateway (Bkash/Nagad/Cards), inventory management, and custom features.</p>
          </div>
        </div>

        <p className="text-sm italic text-zinc-500">Note: These are one-time development fees. Domain & Hosting renewal is separate (approx. 3k-5k BDT/year).</p>
        
        <div className="flex justify-end">
          <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group text-primary">
            Get your free estimate <RightArrow/>
          </Link>
        </div>
      </div>
    )
  },
  {
    question: "How long does it take?",
    answer: (
      <div className="space-y-6">
        <p>We work fast without sacrificing quality.</p>
        
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
            <span className="block text-sm text-zinc-500">Simple Sites</span>
            <Highlight>7 - 10 Days</Highlight>
          </li>
          <li className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
            <span className="block text-sm text-zinc-500">Business Sites</span>
            <Highlight>15 - 20 Days</Highlight>
          </li>
          <li className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800 sm:col-span-2">
            <span className="block text-sm text-zinc-500">E-Commerce / Complex</span>
            <Highlight>25 - 40 Days</Highlight>
          </li>
        </ul>

        <p>The timeline starts once you provide the necessary info. If you are fast, we are faster.</p>
        
        <div className="flex justify-end">
          <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
            Get a custom quote in 10 minutes <RightArrow/>
          </Link>
        </div>
      </div>
    )
  },

  {
    question: "Do I have to pay monthly?",
    answer: (
      <div className="space-y-4">
        <p>
          <Highlight>No</Highlight>. The design and development fee is a <Highlight>one-time payment</Highlight>. 
        </p>
        <p>
          However, every website needs a "home" (Hosting) and a "name" (Domain). These are renewed annually (yearly). We can manage this for you, or you can buy it yourself.
        </p>
        
        <div className="flex justify-end">
          <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
            See our annual maintenance packages <RightArrow/>
          </Link>
        </div>
      </div>
    )
  },

  {
    question: "What if I don't have images or writing ready?",
    answer: (
      <div className="space-y-4">
        <p>This is the #1 reason projects get stuck, but we handle it. If you don't have content:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
             <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
             <span>We can use high-quality <Highlight>premium stock images</Highlight>.</span>
          </li>
          <li className="flex items-start gap-3">
             <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
             <span>We have in-house copywriters who can write professional <Highlight>English (or Bangla) text</Highlight> for your business.</span>
          </li>
        </ul>
        
        <p className="text-sm italic text-zinc-500">Note: Content writing services may have a small additional fee based on volume.</p>
        
        <div className="flex justify-end">
          <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
            Let's plan your project <RightArrow/>
          </Link>
        </div>
      </div>
    )
  },

  {
    question: "Will my website appear on Google?",
    answer: (
      <div className="space-y-4">
        <p>
          <Highlight>Yes</Highlight>. We build every site with "On-Page SEO" best practices. This means Google can easily read and index your site.
        </p>
        
        <div className="grid gap-3">
          <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
             <span className="font-semibold block mb-1">Will you rank #1 immediately?</span>
             <span className="text-zinc-600 dark:text-zinc-400">No. That requires a monthly SEO marketing service.</span>
          </div>
           <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
             <span className="font-semibold block mb-1">Will you appear for your business name?</span>
             <span className="text-zinc-600 dark:text-zinc-400"><Highlight>Absolutely.</Highlight></span>
          </div>
        </div>

           <div className="flex justify-end">
             {/* No CTA link requested here originally but keeping consistent structure if needed, simply closing div */}
           </div>
      </div>
    )
  },

  {
    question: "Why should I choose Odommo Digital over a cheap freelancer?",
    answer: (
      <div className="space-y-6">
        <p>You can find someone to build a site for 5,000 BDT. But you get what you pay for.</p>
        
        <div className="grid gap-3 sm:grid-cols-2">
           <div className="p-4 bg-zinc-50 dark:bg-zinc-900/30 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2">🛡️ Security</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Our sites don't get hacked easily.</p>
           </div>
           <div className="p-4 bg-zinc-50 dark:bg-zinc-900/30 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2">🚀 Speed</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Premium servers, not slow shared hosting.</p>
           </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900/30 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2">🤝 Support</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Registered agency. We don't disappear.</p>
           </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900/30 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2">💰 Sales Focus</h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">We build sites that convert visitors.</p>
           </div>
        </div>

        <div className="flex justify-end">
          <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
            Book a Free Consultation (No pressure, just chat) <RightArrow/>
          </Link>
        </div>
      </div>
    )
  }
];


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

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

    const words = "We know every project is unique, and you might have some questions before getting started.".split(" ")

  return (
    <section className="py-6">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Static Content */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:sticky lg:top-32 h-fit">
            <SelectionLabel text="FAQs" />
          
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start">
            <span className="">Frequently Asked </span><br/>
            <span className="text-zinc-400 dark:text-zinc-600">Questions.</span>
          </h2>
            
    <div>
      <motion.h2
        initial="hidden"
        animate="visible"
        className='mb-6'
        variants={fadeInVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
            {word}
          </motion.span>
        ))} </motion.h2>
        
        <motion.span variants={wordVariants} className="inline-block">
          <UnderlineToBackground className="cursor-pointer">
            <div className="flex items-center gap-2">Contact Us <RightArrow/></div>
          </UnderlineToBackground>
        </motion.span>
     
    </div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className="text-lg md:text-xl font-medium tracking-tight pr-8">{faq.question}</span>
                  <span className={`relative flex items-center justify-center w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    index === openIndex ? 'rotate-45' : 'rotate-0'
                  }`}>
                    <Plus className="w-6 h-6 text-foreground" />
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {index === openIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
