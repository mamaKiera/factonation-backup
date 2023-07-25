
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Herosection from "@/components/homePage/Herosection";
import Problemsection from "@/components/homePage/Problemsection";
import Benefitsection from "@/components/homePage/Benefitsection";
import Reviewsection from "@/components/homePage/Reviewsection";
import Pricesection from "@/components/homePage/Pricesection";
import Questionsection from "@/components/homePage/Questionsection";
import Lastsection from "@/components/homePage/Lastsection";
import Footer from "@/components/homePage/Foooter";
import { cn } from "@/lib/utils";
import { FC } from "react"

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});



 const  Home: FC = () => {
  return (
    <div className={cn(imb_plex_sans_thai.className,"flex flex-col items-center")}>
      <Herosection />
      <Problemsection />
      <Benefitsection />
      <Reviewsection />
      <Pricesection />
      <Questionsection />
      <Lastsection />
      <Footer />
    </div>
  );
}
export default  Home
