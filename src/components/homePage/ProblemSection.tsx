"use client";
import Image from "next/image";
import ProblemImage from "../../../public/IMG_1831 (1).webp";
import { AlertTriangle } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { container, item } from "@/types";

function Problemsection() {
  return (
    <div id="problem-section" className="lg:w-full bg-[#f8f8f8] py-6">
      <div className="flex flex-col mx-auto my-10 gap-5  text-stone-900 max-w-5xl items-center w-5/6">
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
          className="flex  mx-auto items-center justify-center h-24 w-full "
        >
          <h1 className="lg:text-4xl font-bold text-center text-2xl">
            บอกลาการทำระบบ SCADA ต้นทุนสูงๆ ที่ขาดความยืดหยุ่น
          </h1>
        </motion.div>
        <div className="flex lg:flex-row lg:gap-15 flex-col lg:justify-center gap-7 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: "some", once: true }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex lg:w-6/12 justify-center "
          >
            <Image
              src={ProblemImage}
              alt="hero image"
              className="flex items-center rounded-xl lg:h-[350px] lg:w-[380px] h-auto w-9/12"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex flex-col justify-between lg:w-6/12 lg:gap-3 w-3/4 gap-5  "
          >
            <div className="flex lg:flex-row gap-3 flex-col">
              <div className="flex justify-center">
                <AlertTriangle color="red" size={22} />
              </div>
              <motion.div variants={item} className="flex flex-col gap-1">
                <p className="lg:text-lg lg:font-medium lg:text-start text-center text-sm font-normal">
                  การใช้โปรแกรม SCADA สำเร็จรูปในตลาดส่วนมาก จะพ่วงมากับการมีค่า
                  License Software ที่เพิ่มขึ้น ตามขนาดของระบบที่เราจะทำ
                  อีกทั้งยังไม่สามารถ ขยายระบบได้ตามความต้องการในอนาคต...
                </p>
                <p className="lg:font-normal lg:text-sm lg:text-start text-center text-stone-500 font-light text-xs ">
                  ถ้าเราต้องการจะดูสถานะการทำงานของเครื่องจักรสักตัว
                  เราอาจต้องลงทุนหลายแสนและซื้ออุปกรณ์ที่เราไม่เข้าใจการทำงานของมันรวมถึงต้องฝากระบบของเราเอาไว้กับบุคคลที่สาม
                </p>
              </motion.div>
            </div>
            <motion.div
              variants={item}
              className="flex lg:flex-row gap-3 flex-col"
            >
              <div className="flex justify-center">
                <CheckCircle2 color="#0ac5a8" size={22} />
              </div>
              <p className="lg:text-lg lg:font-medium lg:text-start text-center  text-sm font-normal">
                แต่ถ้าหากเรียนคอร์ส SCADA Bootcamp ของเราจนจบ
                คุณจะสามารถทำระบบของตัวเองได้ โดยที่ไม่เสียค่า License Software
                สักบาท และในอนาคตจะเติม Features ต่างๆ เช่น Line Notification,
                Data Logging, สร้าง API ก็ต่อเติมเองได้โดยไม่ต้องพึ่งพาใคร
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Problemsection;
