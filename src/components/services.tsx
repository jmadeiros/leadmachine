"use client"

import { Bot, Mail, PieChart } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "AI Lead Generation",
    description:
      "Leverage AI to identify and engage with high-quality leads. Our intelligent algorithms analyze behavior patterns to find your ideal customers.",
    icon: Bot,
    features: ["Smart Lead Scoring", "Behavior Analysis", "Automated Outreach"],
  },
  {
    title: "Email Automation",
    description:
      "Create personalized email campaigns that convert. Our platform helps you nurture leads through the sales funnel with targeted messaging.",
    icon: Mail,
    features: ["Dynamic Templates", "A/B Testing", "Engagement Tracking"],
  },
  {
    title: "Analytics & Insights",
    description:
      "Make data-driven decisions with comprehensive analytics. Track your lead generation performance and optimize your strategy in real-time.",
    icon: PieChart,
    features: ["Real-time Dashboard", "Custom Reports", "ROI Tracking"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Comprehensive solutions for your lead generation needs
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-500 dark:text-gray-400">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                        >
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 