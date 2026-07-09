import Hero from '../components/home/Hero.jsx'
import QuickLinks from '../components/home/QuickLinks.jsx'
import About from '../components/home/About.jsx'
import ProgramsOverview from '../components/home/ProgramsOverview.jsx'
import MembershipTeaser from '../components/home/MembershipTeaser.jsx'
import LocationsTeaser from '../components/home/LocationsTeaser.jsx'
import Reviews from '../components/home/Reviews.jsx'
import EventsBanner from '../components/home/EventsBanner.jsx'
import AppDownload from '../components/home/AppDownload.jsx'
import InstagramStrip from '../components/home/InstagramStrip.jsx'
import SponsorsStrip from '../components/home/SponsorsStrip.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <About />
      <ProgramsOverview />
      <MembershipTeaser />
      <LocationsTeaser />
      <Reviews />
      <EventsBanner />
      <SponsorsStrip />
      <InstagramStrip />
      <AppDownload />
    </>
  )
}
