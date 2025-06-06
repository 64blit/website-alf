import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import TimelineHeader from "@/components/TimelineHeader";
import TimelineMain from "@/components/TimelineMain";
import InvestorCompanies from "@/components/InvestorCompanies";

const Timeline = () => {
    return (
        <main className="overflow-hidden">
            <TimelineHeader />
            <TimelineMain />

            <InvestorCompanies />
            <Gallery />

            <Footer />
        </main>
    );
};

export default Timeline;