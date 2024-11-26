import React from "react"
import { FiSettings } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";
import { PiHandTapLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";

function OurServices() {
    return(
        <div className="h-[1000px] top-[1784px] bg-[#00CEFF]">
            <h1 className="pt-[50px] text-[#ffffff] text-[24px] text-Cambo text-center">Our CRM Services include</h1>
            <div className="mt-[50px] ml-[150px] mr-[150px] flex justify-evenly">
                <div className="flex justify-center pt-[100px] h-[384px] w-[386px] bg-[#ffffff] rounded-[5px]">
                    <div className="pt-[33px] pl-[38px] h-[100px] w-[100px] bg-[#00CEFF] rounded-full" >
                    <FiSettings className="text-white text-[16px] ml-[13px]"/>
                        <FiSettings className="text-white text-[22px] mt-[-8px] ml-[-5px]"/>
                        <p className="ml-[-90px] w-[200px] mt-[40px] text-Cambo text-center font-normal text-[20px] text-[#00CEFF]">Enhancing the existing functionality</p>
                    </div>
                </div>
                <div className="flex justify-center pt-[100px] h-[384px] w-[386px] bg-[#ffffff] rounded-[5px]">
                    <div className="pt-[33px] pl-[38px] h-[100px] w-[100px] bg-[#00CEFF] rounded-full" >
                        <LuUsers2 className="text-white text-[24px] mt-[8px] "/>
                        <p className="ml-[-140px] w-[300px] mt-[40px] text-Cambo text-center font-normal text-[20px] text-[#00CEFF]">Increase in-house capability to deploy single tenant and multi-tenant solutions</p>
                    </div>
                </div>
                <div className="flex justify-center pt-[100px] h-[384px] w-[386px] bg-[#ffffff] rounded-[5px]">
                    <div className="pt-[33px] pl-[38px] h-[100px] w-[100px] bg-[#00CEFF] rounded-full" >
                        <PiHandTapLight className="text-white text-[22px] mt-[8px]"/>
                        <p className="ml-[-140px] w-[300px] mt-[40px] text-Cambo text-center font-normal text-[20px] text-[#00CEFF]">Offer user-friendly design with special settings installation</p>
                    </div>
                </div>
            </div> 
            <div className="ml-[150px] mr-[150px] mt-[10px] flex justify-evenly">
                <div className="flex justify-center pt-[100px] h-[384px] w-[386px] bg-[#ffffff] rounded-[5px]">
                    <div className="pt-[33px] pl-[38px] h-[100px] w-[100px] bg-[#00CEFF] rounded-full" >
                    <FiSettings className="text-white text-[16px] ml-[13px]"/>
                        <FiSettings className="text-white text-[22px] mt-[-8px] ml-[-5px]"/>
                        <p className="ml-[-140px] w-[300px] mt-[40px] text-Cambo text-center font-normal text-[20px] text-[#00CEFF]">Provide workflow customizations specific to your company’s business processes</p>
                    </div>
                </div>
                <div className="flex justify-center pt-[100px] h-[384px] w-[386px] bg-[#ffffff] rounded-[5px]">
                    <div className="pt-[33px] pl-[38px] h-[100px] w-[100px] bg-[#00CEFF] rounded-full" >
                        <FiSettings className="text-white text-[16px] ml-[13px]"/>
                        <FiSettings className="text-white text-[22px] mt-[-8px] ml-[-5px]"/>
                       
                        <p className="ml-[-140px] w-[300px] mt-[40px] text-Cambo text-center font-normal text-[20px] text-[#00CEFF]">Extending the solutions to WCF web services</p>
                    </div>
                </div>
                <div className="flex justify-center pt-[100px] h-[384px] w-[386px] bg-[#ffffff] rounded-[5px]">
                    <div className="pt-[33px] pl-[38px] h-[100px] w-[100px] bg-[#00CEFF] rounded-full" >
                        <HiOutlineUserGroup className="text-white text-[22px] mt-[8px]"/>
                        <p className="ml-[-140px] w-[300px] mt-[40px] text-Cambo text-center font-normal text-[20px] text-[#00CEFF]">Offer advanced customization that requires integration with third-party solutions</p>
                    </div>
                </div>
            </div> 
            
        </div>
    )
}

export default OurServices