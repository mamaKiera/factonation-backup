import Image from "next/image"
import kPrann from "../../../public/khun-Pran.webp"
import kParinya from "../../../public/khun-Parinya.webp"
import { Star } from 'lucide-react';




function ReviewSection(){
    return(
        <div >
        <div className="flex flex-col w-4/5 mx-auto my-20 gap-16 ">
            <div className="flex gap-4">
                <p className="text-3xl font-black">|</p>
                <p className="text-4xl font-bold">รีวิวจากผู้เรียน</p>   
            </div>
            <div className="flex justify-between items-center">
                <div className="flex bg-stone-900 gap-5 rounded-xl text-white p-10" style={{ width: "480px",height: "250px"}} >
                <Image src={kPrann} alt='kPrann image'style={{height:60,width:65}} className="flex items-center rounded-lg"/>
                    <div className="flex flex-col gap-2">
                        <div>
                        <p>คุณปรานต์ ฉันทจิรพร</p>
                        <p>“อาจารย์สอนเป็นขั้นตอน ทำให้เรื่องที่ซับซ้อนเข้าใจได้ง่ายขึ้น ได้นำความรู้ที่เรียนมาสร้างระบบ SCADA ใช้ที่โรงงานได้จริง ตอนนี้ทำงานสะดวกขึ้นมากครับ ติดตามสถานะเครื่องจักรได้จากทุกที่ทุกเวลา แนะนำเลยครับ”</p>
                        </div>
                        {/* <div className="flex border border-white rounded-xl justify-center w-24 h-4 items-center gap-0.5"> */}
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>      
                        
                        {/* </div> */}
                    </div>  
                </div>
                <div>
                <div className="flex bg-stone-900 gap-5 rounded-xl text-white p-10" style={{ width: "480px",height: "250px", }}>
                <Image src={kParinya} alt='kParinya image'style={{height:60,width:65}} className="flex items-center rounded-lg"/>
                    <div className="flex flex-col gap-2">
                    
                        <div>
                        <p>คุณปริญญา เธียรกานนท์</p>
                        <p>“เอาความรู้มาใช้สร้างระบบ SCADA ที่โรงงานได้ สามารถออกแบบระบบได้แบบที่เราต้องการ ไม่ต้องเสียค่า license รายปี ประหยัดต้นทุนได้เยอะ และได้สกิลใหม่ คุ้มค่าครับ”</p>
                        </div>
                        <div className="flex border border-white rounded-xl justify-center w-24 h-4 items-center gap-0.5">
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>
                        <Star color="#0ac5a8" size={14}/>      
                        </div>
                    </div>  
                </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}
export default ReviewSection
