import { Button } from "@/components/ui/Button";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import BenefitSection from "./ฺฺBenefitSection"
import ReviewSection from "./ReviewSection";
import QuestionSection from "./QuestionSection";
import PriceSection from "./PriceSection";
import Footer from "./footer";
import LastSection from "./LastSection";

import {IBM_Plex_Sans_Thai} from 'next/font/google'

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({subsets: ['thai'], weight: ['100','200','400', '600']})

function Homepage(){
    return (
        <div className={imb_plex_sans_thai.className}>
           
       <HeroSection />
       <ProblemSection />
       <BenefitSection/>
       <ReviewSection />
       <PriceSection />
       <QuestionSection />
       <LastSection />
       <Footer />

        </div>
    )
}

export default Homepage