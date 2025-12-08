"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "What is Odommo Digital?",
    answer: "Odommo Digital is a full-service digital agency specializing in high-performance web development, modern UI/UX design, and strategic digital growth. We function as your dedicated partner in building a powerful online presence."
  },
  {
    question: "How does the process work?",
    answer: "We start with a discovery call to understand your goals. Then, we move to strategic planning and design. Once approved, we build your solution using the latest technologies. Finally, we launch, test, and offer ongoing support to ensure your success."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use industry-standard encryption, secure hosting environments (like Vercel/AWS), and best practices in code security to ensure your data and your users' data remain protected at all times."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We believe in long-term partnerships. We offer various maintenance packages that include security updates, content changes, performance monitoring, and priority support to keep your digital assets running smoothly."
  },
  {
    question: "Is there a free consultation available?",
    answer: "Absolutely. We offer a complimentary initial consultation to discuss your project requirements, assess fit, and provide you with a roadmap for your digital transformation."
  },
  {
    question: "Why choose Odommo Digital over others?",
    answer: "We combine aesthetic excellence with technical rigor. Unlike generic agencies, we don't just build websites; we build digital powerhouses designed to convert. Our hybrid approach ensures you get both beautiful design and rock-solid engineering."
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b last:border-0 border-dashed"
              style={{ borderColor: 'rgb(0 0 0 / 10%)' }}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-lg md:text-xl font-medium tracking-tight pr-8">{faq.question}</span>
                <span className={`relative flex items-center justify-center w-6 h-6 transition-transform duration-200 ease-out ${
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
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="pb-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
