"use client"

import * as React from "react"
import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const partners = [
  {
    name: "TechCorp",
    description: "Leading technology solutions provider",
    logo: "TC",
  },
  {
    name: "GrowthLabs",
    description: "Digital marketing experts",
    logo: "GL",
  },
  {
    name: "InnovatePro",
    description: "Innovation consulting firm",
    logo: "IP",
  },
  {
    name: "DataFlow",
    description: "Data analytics specialists",
    logo: "DF",
  },
  {
    name: "CloudMasters",
    description: "Cloud infrastructure experts",
    logo: "CM",
  },
]

export function Partners() {
  return (
    <section className="py-20">
      <div className="container space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Join hundreds of companies already transforming their lead generation
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            animate={{
              x: [0, -1035],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {[...partners, ...partners].map((partner, index) => (
              <Card
                key={index}
                className="w-72 shrink-0 cursor-pointer transition-colors hover:bg-muted/50"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                      {partner.logo}
                    </div>
                    <CardTitle>{partner.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{partner.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 