"use client";
import { FC, useState } from "react";
import HeroImage from "./HeroImage";
import { motion } from "framer-motion";

interface HeroImageContainerProps {}

const HeroImageContainer: FC<HeroImageContainerProps> = ({}) => {
  const [defaultWidth, setDefaultWidth] = useState<boolean>(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.3, type: "spring", damping: 10 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex gap-4 max-lg:flex-col"
    >
      <HeroImage isFirstImage={true} />
      <HeroImage />
      <HeroImage />
    </motion.div>
  );
};

export default HeroImageContainer;
