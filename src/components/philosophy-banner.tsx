"use client"

import { Info } from "lucide-react"
import { motion } from "framer-motion"

export function PhilosophyBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-blue-50 py-12 dark:bg-blue-950/50"
    >
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
            <Info className="h-6 w-6 text-blue-900 dark:text-blue-100" />
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Our Philosophy
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
            We believe in empowering businesses with intelligent automation. Our
            AI-driven approach ensures you focus on what matters most - building
            relationships with qualified leads.
          </p>
        </div>
      </div>
    </motion.section>
  )
} 