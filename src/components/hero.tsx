"use client"

import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/utils"

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center text-center"
    >
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Power your business with{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Lead Machine
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
          Automate your lead generation with AI-powered tools. Generate more
          qualified leads, optimize your funnel, and scale your business growth.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToElement("calendar")}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Book a Demo
            <Calendar className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.section>
  )
} 