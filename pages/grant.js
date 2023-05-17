import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import GrantHeader from "@/components/GrantHeader"
import GrantMain from "@/components/GrantMain"
import InvestorCompanies from "@/components/InvestorCompanies"
import Meet from "@/components/Meet"



const Grant = () => {
    return (
        <main className="overflow-hidden">
            <GrantHeader />
            <GrantMain />

            <InvestorCompanies />
            <Gallery />
            {/* <Meet /> */}

            {/* Footer */}
            <Footer />
        </main>
    )
}

export default Grant