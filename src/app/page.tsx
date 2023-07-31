import { FC } from "react";

import { IBM_Plex_Sans_Thai } from "next/font/google";
import Herosection from "@/components/homePage/HeroSection";
import Problemsection from "@/components/homePage/ProblemSection";
import Benefitsection from "@/components/homePage/BenefitSection";
import Reviewsection from "@/components/homePage/ReviewSection";
import Pricesection from "@/components/homePage/PriceSection";
import Questionsection from "@/components/homePage/QuestionSection";
import Lastsection from "@/components/homePage/LastSection";
import Footer from "@/components/homePage/Foooter";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  //   const { isLoggedIn } = useAuthContext();
  //   console.log(isLoggedIn, "eieifoobar");
  return (
    <div>
      <Navbar />
      <Herosection isLoggedIn={false} />

      <Problemsection />
      <Benefitsection />
      <Reviewsection />
      <Pricesection />
      <Questionsection />
      <Lastsection isLoggedIn={false} />
      <Footer />
    </div>
  );
};

export default page;
