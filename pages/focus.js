import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import FocusHero from "@/components/FocusHero"
import FocusMain from "@/components/FocusMain"
import InvestorCompanies from "@/components/InvestorCompanies"
import Meet from "@/components/Meet"

const Focus = () => {
    return (
        <main className="overflow-hidden">
            <FocusHero />

            
            <FocusMain />
            <InvestorCompanies />

            <Gallery />
            {/* <Meet /> */}

            {/* Footer */}
            <Footer />
        </main>
    )
}

export default Focus;