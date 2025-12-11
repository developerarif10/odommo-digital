"use client"
import { projects } from '@/lib/content'
import { motion } from "framer-motion"
import ProjectCard from './ProjectCard'
import Button from './mycomponent/Button'
import RightArrow from './mycomponent/RightArrow'

export default function WorkSection() {
  // Ensure we have at least 4 projects, or duplicate if needed for the layout
  const displayProjects = projects.length >= 4 ? projects.slice(0, 4) : [...projects, ...projects].slice(0, 4)

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
    const words = "See how businesses like yours transformed their online presence and attracted more customers with the right digital strategy.".split(" ")

  return (
    <section id="work" className="py-12 md:py-24 container mx-auto px-6">
     <div className="flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-3 md:gap-6 pb-6 md:pb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] justify-self-start">
            <span className="">Selected </span>
            <span className="text-zinc-400 dark:text-zinc-600">Work.</span>
          </h2>

           <motion.h2
        initial="hidden"
        animate="visible"
        className='mb-6'
        variants={fadeInVariants}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="text-zinc-500 dark:text-zinc-400 text-end md:text-lg max-w-sm leading-relaxed justify-self-center inline-block mr-1">
            {word}
          </motion.span>
        ))} </motion.h2>
            
          <Button 
            className="w-full sm:w-auto px-6 py-2 font-medium whitespace-nowrap justify-self-end"
            bgColor="bg-transparent"
            borderColor="border-zinc-200 dark:border-zinc-800 hover:border-primary"
            slideHoverColor="bg-primary"
            hoverTextColor="hover:text-black dark:hover:text-white"
            icon={<RightArrow  />}
          >
            View all
          </Button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {displayProjects.map((project, index) => (
          <ProjectCard key={`${project.slug}-${index}`} project={project} />
        ))}
      </div>
    </section>
  )
}
