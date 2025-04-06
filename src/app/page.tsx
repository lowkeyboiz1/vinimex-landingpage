import AboutUs from '@/components/AboutUs'
import AIAssistant from '@/components/AIAssistant'
import DigitalFarmerProfile from '@/components/DigitalFarmerProfile'
import DigitalMarket from '@/components/DigitalMarket'
import GreenEcosystem from '@/components/GreenEcosystem'
import HeroSection from '@/components/HeroSection'
import RiskMap from '@/components/RiskMap'
import RoadMap from '@/components/RoadMap'
import SmartDashboard from '@/components/SmartDashboard'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <AIAssistant />
      <DigitalFarmerProfile />
      <SmartDashboard />
      <GreenEcosystem />
      <RiskMap />
      <DigitalMarket />
      <RoadMap />
    </>
  )
}
