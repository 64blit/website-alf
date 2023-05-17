import Footer from "@/components/Footer";
import InvestorCompanies from "../components/InvestorCompanies";
import WhoAreWe from "@/components/WhoAreWe";
import Gallery from "@/components/Gallery";
import Meet from "@/components/Meet";
import ContactHeader from "@/components/ContactHeader";
import ContactMain from "@/components/ContactMain";


export default function Home() {
    return (
        <main className="overflow-hidden">
        <ContactHeader />

        <ContactMain />
        <InvestorCompanies />

        <Gallery />
        {/* <Meet /> */}

        {/* Footer */}
        <Footer />
        </main>
    )
}
