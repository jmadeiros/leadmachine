import { Announcement } from "@/components/announcement"
import { Calendar } from "@/components/calendar"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/nav"
import { Partners } from "@/components/partners"
import { PhilosophyBanner } from "@/components/philosophy-banner"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Announcement />
      <Hero />
      <Partners />
      <PhilosophyBanner />
      <Services />
      <Calendar />
    </main>
  )
}
