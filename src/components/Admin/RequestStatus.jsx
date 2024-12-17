import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const RequestStatus = () => {
  const initialdata = [
    {
      id: 1,
      date: "27/02/2024",
      candidateName: "John,Doe",
      mobileNo: "+91-1234567890",
      emailId: "john.doe@example.com",
      linkedInId: "https://linkedin.com/in/johndoe",
      positionFor: "Software Engineer",
      attachment: "Resume.pdf",
      source: "LinkedIn",
      comments: "Strong candidate",
      status: "PENDING",
    },
    {
      id: 2,
      date: "01/02/2024",
      candidateName: "Jane,Smith",
      mobileNo: "+91-9876543210",
      emailId: "jane.smith@example.com",
      linkedInId: "https://linkedin.com/in/janesmith",
      positionFor: "Product Manager",
      attachment: "Portfolio.pdf",
      source: "Indeed",
      comments: "",
      status: "ACCEPTED",
    },
    {
      id: 3,
      date: "21/02/2024",
      candidateName: "Alice,Johnson",
      mobileNo: "+91-5551234567",
      emailId: "alice.johnson@example.com",
      linkedInId: "https://linkedin.com/in/alicejohnson",
      positionFor: "UX Designer",
      attachment: "DesignSamples.zip",
      source: "Referance",
      comments: "Referred by employee",
      status: "REJECTED",
    },
  ];

  const [data, setData] = useState(initialdata)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  return (
    <div className="bg-gradient-to-b from-[#00CEFF] to-[#0072FF] h-screen p-5">
      <h1 className="text-lg md:text-xl font-serif text-center text-white">
        Job Application Request Status
      </h1>
      <div className="bg-white h-5/6 p-2">
        <span>
          <HiDotsVertical size={20} />
        </span>
        <div className="my-3 md:flex items-center justify-between max-md:space-y-2">
          <div className="flex gap-2">
            <button className="flex items-center gap-1 border p-1 px-2 md:px-3 rounded-lg">
              <span>
                <FaFilter size={12} />
              </span>
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center gap-1 border p-1 px-2 md:px-3 rounded-lg">
              <span>
                <IoFilter size={14} />
              </span>
              <span className="text-sm">Sort By</span>
            </button>
          </div>
          <div className="flex items-center border w-60 md:w-80 lg:w-96 rounded-lg p-1 px-2 gap-1 md:gap-3">
            <label htmlFor="search">
              <IoIosSearch size={20} />
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search for anything..."
              className="w-full outline-none text-sm md:text-base"
            />
          </div>
        </div>

        <div className=" overflow-x-auto">
          <table className="text-sm md:text-base border-separate border-spacing-y-1">
            <thead >
              <tr className="bg-[#0098F1] text-left text-white">
                <th className="py-1 border-r-2">S.no</th>
                <th className="py-1 border-r-2">Date</th>
                <th className="py-1 border-r-2 text-nowrap">Candidate Name</th>
                <th className="py-1 border-r-2">Mobile No</th>
                <th className="py-1 border-r-2">Email Id</th>
                <th className="py-1 border-r-2">LinkedIn ID</th>
                <th className="py-1 border-r-2 text-nowrap">Position For</th>
                <th className="py-1 border-r-2">Attachment</th>
                <th className="py-1 border-r-2">Source</th>
                <th className="py-1 border-r-2">Comments</th>
                <th className="py-1 border-r-2">Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item, index) => (
                <tr key={item.id} className="bg-white text-center">
                  <td className=" p-2 border-r-2">{index + 1}</td>
                  <td className=" p-2 border-r-2">{item.date}</td>
                  <td className=" p-2 border-r-2 ">{item.candidateName}</td>
                  <td className=" p-2 border-r-2 whitespace-nowrap ">
                    {item.mobileNo}
                  </td>
                  <td className=" p-2 border-r-2 ">
                    {item.emailId.length > 15
                      ? item.emailId.slice(0, 15) + "..."
                      : item.emailId}
                  </td>
                  <td className=" p-2 border-r-2 ">
                    <a
                      href={item.linkedInId}
                      className=" hover:underline "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkedInId.length > 25
                        ? item.linkedInId.slice(0, 25) + "..."
                        : item.linkedInId}
                    </a>
                  </td>
                  <td className=" p-2 border-r-2 border-r-2-black whitespace-nowrap">
                    {item.positionFor.length > 25
                      ? item.positionFor.slice(0, 25) + "..."
                      : item.positionFor}
                  </td>
                  <td className=" p-2 border-r-2 border-r-2-black">
                    <button className="flex items-center justify-between w-full">
                      <span>
                        {item.attachment.length > 15
                          ? item.attachment.slice(0, 15) + "..."
                          : item.attachment}
                      </span>
                      <span className="">
                        <MdOutlineFileDownload />
                      </span>
                    </button>
                  </td>
                  <td className=" p-2 border-r-2 border-r-2-black">
                    {item.source}
                  </td>
                  <td className=" p-2 border-r-2 border-r-2-black whitespace-nowrap">
                    {item.comments
                      ? item.comments.length > 15
                        ? item.comments.slice(0, 15) + "..."
                        : item.comments
                      : "N/A"}
                  </td>
                  <td className=" p-2 border-r-2 border-r-2-black">
                    <span
                      className={`py-1 px-3 rounded-full text-sm font-medium ${
                        item.status === "ACCEPTED"
                          ? "bg-[#098C21] text-white px-2 py-1 rounded"
                          : item.status === "PENDING"
                          ? "bg-[#FF9900] text-white px-2 py-1 rounded"
                          : item.status === "REJECTED"
                          ? "bg-[#FF3636] text-white px-2 py-1 rounded"
                          : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2 flex items-center gap-2">
                    <button className="bg-[#2A8F4C] text-white p-1 rounded">
                      <IoEyeOutline />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="bg-[#FF3636] text-white p-1 rounded">
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestStatus;
