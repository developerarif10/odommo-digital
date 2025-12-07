"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Answers to common questions about Odommo Digital and our services. If you have any other questions, please don't hesitate to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-2xl bg-secondary/5 overflow-hidden transition-all duration-300 hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold tracking-tight">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    index === openIndex ? 'rotate-180 text-primary' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {index === openIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
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
