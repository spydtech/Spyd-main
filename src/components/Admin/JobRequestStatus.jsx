import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";

const JobRequestStatus = () => {
  const [data, setData] = useState([]); // State to store the fetched data
  const [error, setError] = useState(""); // State to handle errors
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading state to true before fetching
        const response = await axios.get("http://15.206.94.23:8081/application/getAll");
        const fetchedData = response.data; // Adjust according to actual structure

        if (Array.isArray(fetchedData)) {
          setData(fetchedData); // Only set if it's an array
        } else {
          setError("Invalid data format.");
        }
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setIsLoading(false); // Set loading state to false after fetching is complete
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only on component mount

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://15.206.94.23:8081/api/job-requests/${id}`, { status: newStatus });
      if (response.status === 200) {
        setData(
          data.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
      } else {
        setError("Failed to update the status.");
      }
    } catch (err) {
      setError("Error updating the status.");
    }
  };
  const handleDownload = (filename) => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the link's href to the file's URL (backend URL + filename)
    link.href = `http://15.206.94.23:8081/resumes/${filename}`; // Replace with your backend URL
  
    // Set the download attribute to suggest the filename for download
    link.download = filename;
  
    // Programmatically click the link to trigger the download
    link.click();
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://15.206.94.23:8081/api/job-requests/${id}`);
      setData(data.filter((item) => item.id !== id)); // Remove deleted item from the state
    } catch (err) {
      setError("Failed to delete the record.");
    }
  };

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
          <div className="flex items-center border md:w-80 lg:w-96 rounded-lg p-1 px-2 gap-1 md:gap-3">
            <label htmlFor="search">
              <IoIosSearch size={20} />
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search for anything..."
              className="w-full outline-none text-sm "
            />
          </div>
        </div>

        {/* Handle loading, error, and displaying fetched data */}
        {isLoading && <p className="text-center text-white">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="overflow-x-auto">
          <table className="text-sm md:text-base border-separate border-spacing-y-1">
            <thead>
              <tr className="bg-[#0098F1] text-left text-white">
                <th className="py-1 px-2 border-r-2">S.no</th>
                <th className="py-1 px-2 border-r-2">Date</th>
                <th className="py-1 px-2 border-r-2 text-nowrap">Candidate Name</th>
                <th className="py-1 px-2 border-r-2">Mobile No</th>
                <th className="py-1 px-2 border-r-2">Email Id</th>
                <th className="py-1 px-2 border-r-2">LinkedIn ID</th>
                <th className="py-1 px-2 border-r-2 text-nowrap">Position For</th>
                <th className="py-1 px-2 border-r-2">Attachment</th>
                <th className="py-1 px-2 border-r-2">Source</th>
                <th className="py-1 px-2 border-r-2">Comments</th>
                <th className="py-1 px-2 border-r-2">Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="bg-white text-center">
                  <td className="p-2 border-r-2">{index + 1}</td>
                  <td className="p-2 border-r-2">{item.date}</td>
                  <td className="p-2 border-r-2">
      {`${item.firstName} ${item.lastName}`}
    </td>
                  <td className="p-2 border-r-2">{item.phoneNumber}</td>
                  <td className="p-2 border-r-2">{item.emailAddress}</td>
                  <td className="p-2 border-r-2">{item.linkedIn}</td>
                  <td className="p-2 border-r-2">{item.position_applied}</td>
                  <td className="p-2 border-r-2">
                  <button
    onClick={() => handleDownload(item.resume)} // Handle download on button click
    className="flex items-center justify-between w-full text-blue-500"
  >
    <span>{item.resume}</span>
    <span>
      <MdOutlineFileDownload />
    </span>
  </button>
                  </td>
                  <td className="p-2 border-r-2">{item.source}</td>
                  <td className="p-2 border-r-2">{item.coverLetter}</td>
                  <td className="p-2 border-r-2">
                    <span
                      className={`py-1 px-3 rounded-full ${
                        item.status === "ACCEPTED"
                          ? "bg-[#098C21]"
                          : item.status === "PENDING"
                          ? "bg-[#FF9900]"
                          : "bg-[#FF3636]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2 flex items-center gap-2">
                    <button
                      onClick={() => handleStatusUpdate(item.id, "ACCEPTED")}
                      className="bg-[#2A8F4C] text-white p-1 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(item.id, "REJECTED")}
                      className="bg-[#FF3636] text-white p-1 rounded"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-[#FF9900] text-white p-1 rounded"
                    >
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

export default JobRequestStatus;
