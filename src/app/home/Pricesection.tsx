import { CheckSquare } from 'lucide-react';



function Pricesection(){
    return(
        <div className="my-28">
          <div className="flex flex-col gap-3 w-11/12 mx-auto my-14 ">
            <div className="flex gap-4 px-20 ">
                <p className="text-3xl font-black">|</p>
                <p className="text-4xl font-bold">เริ่มเรียนได้เเล้ววันนี้ในราคาสุดคุ้ม</p>   
            </div>
            <div className="flex items-center justify-center gap-3 ">
              <div className="flex gap-3 ">
                <div className="border border-stone-900 p-6 rounded-xl w-60">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="font-light text-sm">Module 1</p>
                            <p className="font-semibold text-xl w-52">C# & .NET Fundamentals</p>
                            <p className="font-semibold text-3xl">4,999 ฿</p>
                            
                         </div>
                        <div className="flex flex-col gap-3 border-y py-4 ">
                            <div className="flex gap-2">
                                <div>
                                  <CheckSquare color="black" size={16} />
                                </div>
                                <p className="text-xs">ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น 
                                   VDO On-Demand สัปดาห์ละ 2 วิดีโอ</p>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                  <CheckSquare color="black" size={16} />
                                </div>
                                <p className="text-xs">กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่
                                เรียนในคอร์สเดียวกัน</p>
                            </div>
                         </div>
                        <button className="bg-stone-900 h-8 rounded-lg text-white">Buy Module 1</button>
                    </div>
                </div>

                <div className="border border-stone-900 p-6 rounded-xl w-60">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="font-light text-sm">Module 2</p>
                            <p className="font-semibold text-xl w-52">Desktop & Web Application</p>
                            <p className="font-semibold text-3xl">4,999 ฿</p>
                            
                         </div>
                        <div className="flex flex-col gap-3 border-y py-4 ">
                            <div className="flex gap-2">
                               <div>
                                  <CheckSquare color="black" size={16} />
                                </div>
                                <p className="text-xs">ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น 
                                   VDO On-Demand สัปดาห์ละ 2 วิดีโอ</p>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                  <CheckSquare color="black" size={16} />
                                </div>
                                <p className="text-xs">กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่
                                เรียนในคอร์สเดียวกัน</p>
                            </div>
                         </div>
                        <button className="bg-stone-900 h-8 rounded-lg text-white">Buy Module 2</button>
                    </div>
                </div> 
                
                <div className="border border-stone-900 p-6 rounded-xl w-60">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="font-light text-sm">Module 3</p>
                            <p className="font-semibold text-xl w-52">SCADA Application Development</p>
                            <p className="font-semibold text-3xl">6,999 ฿</p>
                            
                         </div>
                        <div className="flex flex-col gap-3 border-y py-4 ">
                            <div className="flex gap-2">
                                <div>
                                  <CheckSquare color="black" size={16} />
                                </div>
                                <p className="text-xs">ระยะเวลารวมประมาณ 4 เดือน โดยรูปแบบการเรียนจะเป็น 
                                   VDO On-Demand สัปดาห์ละ 2 วิดีโอ</p>
                            </div>
                            <div className="flex gap-2">
                                  <div>
                                  <CheckSquare color="black" size={16} />
                                </div>
                                <p className="text-xs">กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่
                                เรียนในคอร์สเดียวกัน</p>
                            </div>
                         </div>
                        <button className="bg-stone-900 h-8 rounded-lg text-white">Buy Module 3</button>
                    </div>
                </div>
              </div>

               <div>
               <div className=" bg-stone-900 p-6 rounded-xl w-60">
                    <div className="flex flex-col gap-3 text-white">
                        <div className="flex flex-col gap-2">
                            <p className="font-light text-sm">Module 1+2+3</p>
                            <p className="font-semibold text-xl w-52">Special Bundle Package</p>
                            <p className="font-semibold text-xl line-through decoration-stone-600 text-stone-600">16,999 ฿</p>
                            <p className="font-semibold text-3xl">10,999 ฿</p>
                            
                         </div>
                        <div className="flex flex-col gap-3 border-y  border-stone-700 py-4 "> 
                            <div className="flex gap-2">
                                <div>
                                  <CheckSquare color="white" size={16} />
                                </div>
                                <p className="text-xs">ระยะเวลารวมประมาณ 9 - 12 เดือน โดยรูปแบบการเรียนจะเป็น VDO On-Demand สัปดาห์ละ 2 วิดีโอ</p>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                  <CheckSquare color="white" size={16} />
                                </div>
                                <p className="text-xs">กลุ่ม Private ผ่าน Discord สำหรับการพูดคุยและถามตอบระหว่างอาจารย์และนักเรียนที่เรียนในคอร์สเดียวกัน</p>
                            </div>
                         </div>
                        <button className="bg-stone-900 h-8 rounded-lg text-white border border-white">Buy Module 1+2+3</button>
                    </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Pricesection