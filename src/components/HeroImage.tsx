"use client";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import image_test from "../../public/image_test_1.jpeg";
import { motion } from "framer-motion";

interface HeroImageProps {
  isFirstImage?: boolean;
}

// const HeroImage: FC<HeroImageProps> = ({}) => {
//   return (
//     <motion.div
//       initial={{ scale: 0, rotate: 90 }}
//       animate={{ rotate: 0, scale: 1 }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       }}
//       className={` first:w-[450px] container rounded-lg ease-in-out duration-300 overflow-hidden relative w-[150px] h-[560px] hover:w-[450px] bg-[url("https://i.pinimg.com/564x/1b/17/af/1b17afe7fcdc045b182940926332c40c.jpg")]`}
//     >
//       {/* <Image
//         src={image_test}
//         alt=""
//         className="rounded-xl shadow-inner ease-in-out duration-300"
//       /> */}
//       <div className="absolute w-full bottom-4 left-12 flex  items-center ">
//         <div className="flex flex-col">
//           <h1 className="text-3xl font-bold">Scada Bootcamp</h1>
//           <h1 className="text-xl">10,000 Hr</h1>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const HeroImage: FC<HeroImageProps> = ({ isFirstImage }) => {
  const [isHovered, setIsHovered] = useState(isFirstImage);
  return (
    <div
      className={`container rounded-lg ease-in-out duration-300 overflow-hidden relative ${
        isHovered ? "w-[450px]" : "w-[150px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/564x/1b/17/af/1b17afe7fcdc045b182940926332c40c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "560px",
      }}
    ></div>
  );
};

export default HeroImage;
