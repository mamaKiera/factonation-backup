"use client";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import image_test from "../../public/image_test_1.jpeg";
import { motion } from "framer-motion";

interface HeroImageProps {
  isFirstImage?: boolean;
}

const HeroImage: FC<HeroImageProps> = ({ isFirstImage }) => {
  const [isHovered, setIsHovered] = useState(isFirstImage);
  return (
    <div
      className={`container rounded-2xl ease-in-out duration-300 overflow-hidden relative ${
        isHovered ? "w-[500px]" : "w-[180px]"
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
