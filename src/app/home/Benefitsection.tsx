import { Rocket } from 'lucide-react';
import { UploadCloud } from 'lucide-react';
import { FileCode2 } from 'lucide-react';



function Benefitsection(){
    return(
        
          <div className="flex flex-col w-10/12  mx-auto my-24 gap-10 text-gray-900 ">
            <div className="flex justify-center text-4xl font-bold gap-3">
              <p>เรียนกับ</p> 
              <p className="text-primary-button">FACTONATION</p>
              <p>ดียังไง ?</p>
            
            </div>
              <div className="flex justify-center gap-8 text-center">

                <div className="flex border-2 border-primary-button py-6 px-11 rounded-xl h-80 items-center justify-center w-60 ">
                    <div className="flex flex-col gap-10 justify-center items-center" >
                    <FileCode2 color="black" size={54} />
                      <p className="text-xl">มีผลงานระหว่างเรียนทุกโมดูล</p>
                    </div>
                </div>

                <div className="flex border-2 border-primary-button py-6 px-10 rounded-xl h-80 items-center justify-center w-60 ">
                    <div className="flex flex-col gap-10 justify-center items-center">
                    <UploadCloud color="black" size={54}/>
                      <p className="text-xl">เรียนจบ นำระบบขึ้น Cloud ดูได้ทันที</p>
                    </div>
                </div>

                <div className="flex border-2 border-primary-button py-6 px-10 rounded-xl h-80 items-center  justify-center w-60 ">
                    <div className="flex flex-col gap-10 justify-center items-center">
                      <p><Rocket color="black" size={54}/></p>
                      <p className="text-xl">มีการสอนต่อเติมระบบ ให้มีความสามารถสูงขึ้น</p>
                    </div>
                </div>

            </div>
          </div>
        
    
    )
}

export default Benefitsection