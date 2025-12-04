"use client"

export default function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
           <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-accent-blue/30 rounded-tl-3xl" />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-accent-violet/30 rounded-br-3xl" />
             
             <div className="bg-surface p-10 rounded-3xl border border-white/5 relative z-10">
               <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
               <p className="text-secondary leading-relaxed mb-6">
                 We believe that great design is invisible. It's about creating experiences that feel natural, intuitive, and effortless.
               </p>
               <p className="text-secondary leading-relaxed">
                 Our team of designers and developers work in perfect sync to bridge the gap between creative vision and technical execution.
               </p>
             </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-secondary mb-8 leading-relaxed">
            We are a digital agency focused on creating premium web experiences for brands that want to stand out.
          </p>
          <div className="flex gap-12 border-l border-white/10 pl-8">
            <div>
              <span className="block text-4xl font-bold text-white mb-2">5+</span>
              <span className="text-sm text-secondary uppercase tracking-wider">Years Exp.</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-white mb-2">50+</span>
              <span className="text-sm text-secondary uppercase tracking-wider">Projects</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-white mb-2">10+</span>
              <span className="text-sm text-secondary uppercase tracking-wider">Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
