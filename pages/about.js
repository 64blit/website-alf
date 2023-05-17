import AboutHeader from "@/components/AboutHeader";
import AboutMain from "@/components/AboutMain";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import InvestorCompanies from "@/components/InvestorCompanies";
import Meet from "@/components/Meet";

const about = () => {
    return (
        <main className="overflow-hidden">
            <AboutHeader />
            <AboutMain />

            <InvestorCompanies />
            <Gallery />
            {/* <Meet /> */}

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default about;
