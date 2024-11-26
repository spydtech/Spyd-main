import React from "react";
import { MdPlayArrow } from "react-icons/md";

function ServiceKeyBenefits(){
    return(
        <div className="flex ml-[180px]">
            <img className="w-[330px] h-[400px] mt-[10px]" src="https://s3-alpha-sig.figma.com/img/18e1/b94d/5a8fdddc454f9a896e1eefdb08d70f60?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UBfgUGWaf3o8ARmxMz5e9f2fAScFFjT-5q0xfPsGz2lPbj3bqfNZJ~Bp7hHoCvXMo4D0LWSUDKXybgY5XYS5o46dh4fpA5gzoXWz2-oAYjFWa5lMUmnhYUCWmqFgcwmSBiRBNn5Ime4-ehcP74aroni2m9HS~oAWWlUjZd6Lt7I4mPnN-lw9RZZ5HjdJw-O7O2xwQQfg8SfsRmPHQpEpQprytrPgj5zdtwWHiIHqR~nV4LAw5PWKjGkx1LTUselCe3DxkoYfIdtn9TdeZHblsDLhnKTdEbSJ6OaHFCnEbJsbOLDDuON0pNI-FSRiErrqgCHkIWy8iwJtPkIude7IfQ__" alt="" />
            <div className="leading-[60px] ml-[100px]">
                <h1 className="text-[30px] text-Cambo text-normal text-[#00CEFF]">The key benefits of CRM solutions include</h1>
                <div className="flex">
                    <MdPlayArrow className="mt-[22px]"/>
                    <p className="text-Cambo text-[18px]">Pay-as-you-go pricing model</p>
                </div>
                <div className="flex">
                    <MdPlayArrow className="mt-[22px]"/>
                    <p className="text-Cambo text-[18px]">Dedicated API for each service offered</p>
                </div>
                <div className="flex">
                    <MdPlayArrow className="mt-[22px]"/>
                    <p className="text-Cambo text-[18px]">Increase profitability and efficiency</p>
                </div>
                <div className="flex">
                    <MdPlayArrow className="mt-[22px]"/>
                    <p className="text-Cambo text-[18px]">Seamless Database Management</p>
                </div>
                <div className="flex">
                    <MdPlayArrow className="mt-[22px]"/>
                    <p className="text-Cambo text-[18px]">Security through compliance program and highly secure data centers</p>
                </div>
                <div className="flex">
                    <MdPlayArrow className="mt-[22px]"/>
                    <p className="text-Cambo text-[18px]">Scalability regardless of application size</p>
                </div>
            </div>
        </div>

    )
}

export default ServiceKeyBenefits