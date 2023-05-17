import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MissionAndVission from "@/components/MissionAndVission";
import InvestorCompanies from "../components/InvestorCompanies";
import WhoAreWe from "@/components/WhoAreWe";
import Gallery from "@/components/Gallery";
import Meet from "@/components/Meet";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      
      <h2 className="text-center text-slate-600 text-[1.3rem] md:text-[2rem] font-bold my-[1.5rem] md:my-[3rem]">Colleagues & Collaborators</h2>
      <Sponsors />

      <MissionAndVission />
      <InvestorCompanies />
      {/* <Team /> */}
      <WhoAreWe />

      <Gallery />
      {/* <Meet /> */}

      {/* Footer */}
      <Footer />
    </main>
  )
}
