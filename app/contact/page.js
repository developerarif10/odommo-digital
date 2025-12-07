"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  })

  // Add the phone field to state as per design
  const [phone, setPhone] = useState("")

  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone }),
      })

      if (!res.ok) throw new Error("Failed to send")

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        service: "",
        message: "",
      })
      setPhone("")
    } catch (err) {
      setStatus("error")
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
           <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-semibold tracking-wider uppercase text-gray-500">
             • Contact Us
           </span>
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
             Get In <span className="text-primary italic font-serif">Touch</span>
           </h1>
        </div>

        {/* Main Card Container */}
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
          
          {/* LEFT SIDE - Brand & Info */}
          <div className="lg:w-[40%] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

            <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
                 Odommo <br/> Digital
               </h2>
               <p className="text-xl md:text-2xl font-serif italic text-blue-100 opacity-90">
                 Your Design <br/> Partner
               </p>
            </div>

            <div className="relative z-10 mt-12 space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 </div>
                 <a href="mailto:hello@odommodigital.com" className="text-lg hover:text-blue-100 transition-colors">hello@odommodigital.com</a>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 </div>
                 <span className="text-lg">(00) 987 765 543</span>
               </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="lg:w-[60%] p-10 md:p-14 bg-white dark:bg-zinc-900">
             <div className="max-w-xl mx-auto lg:mx-0">
               <h3 className="text-3xl md:text-4xl font-bold mb-10 text-zinc-900 dark:text-white">
                 Contact <span className="text-primary italic font-serif">Us</span>
               </h3>

               {status === "success" ? (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-center py-20 bg-green-50 rounded-2xl border border-green-100"
                 >
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                    <p className="text-green-600 mb-6">We'll get back to you shortly.</p>
                    <button onClick={() => setStatus("idle")} className="text-primary font-bold hover:underline">Send another</button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-600 dark:text-zinc-400">Name</label>
                          <input 
                            name="name" required value={formData.name} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="Full Name"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-600 dark:text-zinc-400">Email</label>
                          <input 
                            name="email" type="email" required value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="email@example.com"
                          />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-600 dark:text-zinc-400">Phone</label>
                          <input 
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="Optional"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-600 dark:text-zinc-400">Services</label>
                          <select 
                            name="service" value={formData.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-zinc-600 dark:text-zinc-300"
                          >
                             <option value="">Select Service</option>
                             <option value="web-dev">Web Development</option>
                             <option value="ui-ux">UI/UX Design</option>
                             <option value="marketing">Digital Marketing</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-600 dark:text-zinc-400">Message</label>
                          <textarea 
                            name="message" required rows="4" value={formData.message} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="How can we help you?"
                          ></textarea>
                    </div>

                    <button 
                       type="submit" 
                       disabled={status === "loading"}
                       className="px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wider disabled:opacity-50 disabled:hover:scale-100"
                    >
                       {status === "loading" ? "Sending..." : "Submit Now"}
                    </button>
                 </form>
               )}
             </div>
          </div>
        </div>

        {/* Bottom Logo Branding */}
        <div className="mt-20 flex justify-center pb-10">
           <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
               <div className="w-10 h-10 border-2 border-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">O</span>
               </div>
               <span className="text-3xl font-bold tracking-tight">Odommo Digital</span>
           </div>
        </div>

      </div>
    </div>
  )
}
