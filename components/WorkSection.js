"use client"
import { projects } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  // Ensure we have at least 4 projects, or duplicate if needed for the layout
  const displayProjects = projects.length >= 4 ? projects.slice(0, 4) : [...projects, ...projects].slice(0, 4)

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {displayProjects.map((project, index) => (
          <ProjectCard key={`${project.slug}-${index}`} project={project} />
        ))}
      </div>
      
      <div className="mt-8 md:hidden">
        <Link href="/portfolio" className="flex items-center gap-2 text-white hover:text-accent-blue transition-colors">
          View all projects <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  )
}
