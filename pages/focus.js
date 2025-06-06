import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import FocusHeader from "@/components/FocusHeader"
import FocusMain from "@/components/FocusMain"
import InvestorCompanies from "@/components/InvestorCompanies"
import Meet from "@/components/Meet"

const Focus = () => {
    return (
        <main className="overflow-hidden">
            <FocusHeader />

            
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