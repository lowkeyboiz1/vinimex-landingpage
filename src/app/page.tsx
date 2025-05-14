import AboutUs from '@/components/AboutUs'
import AIAssistant from '@/components/AIAssistant'
import JoinCommunity from '@/components/JoinCommunity'
import HeroSection from '@/components/HeroSection'
import SmartDashboard from '@/components/SmartDashboard'
import TroLyAI from '@/components/TroLyAI'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <AIAssistant />
      <TroLyAI />
      <SmartDashboard />
      <JoinCommunity />
    </>
  )
}
