"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { UploadCloud } from "lucide-react";
import { FileCode2 } from "lucide-react";

const benefits: { icon: React.ReactNode; desc: string }[] = [
  {
    icon: <FileCode2 color="black" size={54} />,
    desc: "มีผลงานระหว่างเรียนทุกโมดูล",
  },
  {
    icon: <UploadCloud color="black" size={54} />,
    desc: "เรียนจบ นำระบบขึ้น Cloud ดูได้ทันที",
  },
  {
    icon: <Rocket color="black" size={54} />,
    desc: "มีการสอนต่อเติมระบบ ให้มีความสามารถสูงขึ้น",
  },
];

function Benefitsection() {
  return (
    <div
      id="benefit-section"
      className="flex flex-col w-10/12  mx-auto my-24 gap-10 text-gray-900 "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center text-4xl font-bold gap-3"
      >
        <p>เรียนกับ</p>
        <p className="text-primary-button">FACTONATION</p>
        <p>ดียังไง ?</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center gap-8 text-center"
      >
        {benefits.map((benefit, i) => {
          return (
            <div
              className="flex border-2 border-primary-button py-6 px-11 rounded-xl h-80 items-center justify-center w-80"
              key={i}
            >
              <div className="flex flex-col gap-10 justify-center items-center">
                {benefit.icon}
                <p className="text-xl">{benefit.desc}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Benefitsection;
