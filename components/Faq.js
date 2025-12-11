'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import SelectionLabel from './SelectionLabel'
import RightArrow from './mycomponent/RightArrow'
import UnderlineToBackground from './mycomponent/underline-to-background'

const faqs = [
  {
    question: "How much does a website cost?",
    answer: (
      <div className="space-y-4">
        <p>Most business websites range from <strong>$2,500 to $8,000</strong> depending on features and complexity.</p>
        <p>A simple 5-page site starts around $2,500. Need eCommerce or custom functionality? Expect $5,000-$8,000+.</p>
        <p>Here's the real question: <em>How much is your current website costing you in lost customers?</em></p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline  transition-all pt-2 group">
          Get your free estimate <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    )
  },
  {
    question: "How long does it take?",
    answer: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-1 ml-1">
          <li><strong>Brand Identity:</strong> 2-3 weeks</li>
          <li><strong>Website Design:</strong> 4-8 weeks</li>
          <li><strong>Full Digital Package:</strong> 8-12 weeks</li>
        </ul>
        <p>Timeline depends on your feedback speed and project scope. We'll give you exact dates on our kickoff call.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline  transition-all pt-2 group">
          Book your strategy call <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    )
  },
  {
    question: "Do I need a new website if I already have one?",
    answer: (
      <div className="space-y-4">
        <p>Ask yourself:</p>
        <ul className="list-disc list-inside space-y-1 ml-1">
            <li>Is it mobile-friendly?</li>
            <li>Does it load in under 3 seconds?</li>
            <li>Does it look professional and trustworthy?</li>
            <li>Are you getting leads from it?</li>
        </ul>
        <p>If you answered "no" to any of these, your site is costing you business.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
          Get a free website audit <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    )
  },
  {
    question: "What if I don't have content ready?",
    answer: (
      <div className="space-y-4">
        <p>No problem. Most clients don't.</p>
        <p>We provide:</p>
        <ul className="space-y-1 ml-1">
            <li>✓ Professional copywriting</li>
            <li>✓ Content strategy</li>
            <li>✓ Logo design (if needed)</li>
            <li>✓ Stock photo recommendations</li>
        </ul>
        <p>Don't let missing content stop you from starting.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
          Let's plan your project <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    )
  },
  {
    question: "Will my website show up on Google?",
    answer: (
      <div className="space-y-4">
        <p>Yes—every site we build is SEO-optimized: fast loading, mobile-responsive, clean code, and proper structure.</p>
        <p>But ranking #1? That requires ongoing SEO and content marketing (which we also offer).</p>
        <p>Think of it as: we build the foundation, you decide if you want to compete for top rankings.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all` pt-2 group">
          Learn about SEO services <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    )
  },
  {
    question: "What makes you different?",
    answer: (
      <div className="space-y-4">
        <p>Simple:</p>
        <ul className="list-disc list-inside space-y-1 ml-1">
            <li>We focus on results, not just pretty designs</li>
            <li>You get direct access to your project team</li>
            <li>We speak human, not tech jargon</li>
            <li>Fast turnaround without cutting corners</li>
            <li>We care about your growth, not just our portfolio</li>
        </ul>
        <p>We're not the cheapest—but we're the best investment.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-medium underline transition-all pt-2 group">
          See what clients say <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    )
  }
]


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
