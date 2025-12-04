"use client"
import { projects } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkSection() {
  // Ensure we have at least 3 projects, or duplicate if needed for the layout
  const displayProjects = projects.length >= 3 ? projects.slice(0, 3) : [...projects, ...projects].slice(0, 3)

  return (
    <section id="work" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-secondary max-w-md">
            A showcase of our recent collaborations with ambitious brands and startups.
          </p>
        </div>
        <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-white hover:text-accent-blue transition-colors">
          View all projects <ArrowUpRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">
        {/* Large Featured Project (Left) */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-surface h-[400px] lg:h-full">
          <Image 
            src={displayProjects[0].image} 
            alt={displayProjects[0].title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
            <span className="text-accent-cyan font-medium mb-2">{displayProjects[0].category}</span>
            <h3 className="text-3xl font-bold text-white mb-2">{displayProjects[0].title}</h3>
            <p className="text-gray-300 line-clamp-2 mb-4">{displayProjects[0].excerpt}</p>
            <div className="flex gap-2">
              {displayProjects[0].stack.map(tech => (
                <span key={tech} className="text-xs bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two Smaller Projects (Right) */}
        <div className="flex flex-col gap-8 h-full">
          {displayProjects.slice(1, 3).map((project) => (
            <div key={project.slug} className="group relative flex-1 rounded-3xl overflow-hidden border border-white/10 bg-surface min-h-[280px]">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent-violet font-medium mb-1 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 md:hidden">
        <Link href="/portfolio" className="flex items-center gap-2 text-white hover:text-accent-blue transition-colors">
          View all projects <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  )
}
