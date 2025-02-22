"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Announcement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 dark:bg-blue-950/50"
    >
      <div className="container flex h-10 items-center justify-center gap-x-2 text-sm text-blue-900 dark:text-blue-100">
        <Sparkles className="h-4 w-4" />
        <p>
          <span className="font-medium">New Feature:</span> AI-powered lead scoring
          now available!
        </p>
      </div>
    </motion.div>
  )
} 