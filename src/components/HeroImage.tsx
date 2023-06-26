import Image from "next/image";
import { FC } from "react";
import image_test from "../../public/image_test_1.jpeg";

interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = ({}) => {
  return (
    <div className="container overflow-hidden relative">
      <Image src={image_test} alt="" className="rounded-xl shadow-inner" />
      <div className="absolute w-full bottom-4 left-12 flex  items-center ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Scada Bootcamp</h1>
          <h1 className="text-xl">10,000 Hr</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
