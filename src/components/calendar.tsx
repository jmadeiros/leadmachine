"use client"

import * as React from "react"
import { Calendar as CalendarIcon, Clock } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

const timezones = [
  "Pacific Time (PT)",
  "Mountain Time (MT)",
  "Central Time (CT)",
  "Eastern Time (ET)",
  "Greenwich Mean Time (GMT)",
  "Central European Time (CET)",
]

export function Calendar() {
  const [selectedTime, setSelectedTime] = React.useState<string>()

  return (
    <section id="calendar" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Schedule a Demo
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Book a personalized demo to see how Lead Machine can transform your
            lead generation process
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-lg"
        >
          <Card className="backdrop-blur-sm">
            <div className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Select a Time</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Timezone
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((timezone) => (
                        <SelectItem key={timezone} value={timezone}>
                          {timezone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Available Times
                  </label>
                  <ScrollArea className="h-[200px] rounded-md border">
                    <div className="p-4">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "ghost"}
                          className="mb-2 w-full justify-start"
                          onClick={() => setSelectedTime(time)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <Button className="w-full" size="lg">
                  Confirm Booking
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 