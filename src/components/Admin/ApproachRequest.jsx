import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { IoFilter, IoEyeOutline } from "react-icons/io5";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const ApproachRequest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/contact/getAll"); // Replace with your endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/contact/delete/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Handle status update
  const handleStatusUpdate = async (id, newStatus) => {
    if (!id) {
      console.error("Invalid ID:", id);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/contact/status/change/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      // Update the local state on success
      setData(
        data.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#00CEFF] to-[#0072FF] h-screen p-5">
      <h1 className="text-lg md:text-xl font-serif text-center text-white mb-4">
        People You've Made Contact With
      </h1>

      <div className="bg-white h-5/6 p-2">
        <span>
          <HiDotsVertical size={20} />
        </span>
        <div className="my-3 md:flex items-center justify-between max-md:space-y-2">
          <div className="flex gap-2">
            <button className="flex items-center gap-1 border p-1 px-3 rounded-lg hover:bg-gray-100">
              <FaFilter size={14} />
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center gap-1 border p-1 px-3 rounded-lg hover:bg-gray-100">
              <IoFilter size={16} />
              <span className="text-sm">Sort By</span>
            </button>
          </div>

          <div className="flex items-center border w-full md:w-80 rounded-lg px-2 py-1">
            <IoIosSearch size={20} />
            <input
              type="search"
              placeholder="Search for anything..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="text-sm md:text-base border-separate border-spacing-y-1">
            <thead>
              <tr className="bg-[#0098F1] text-left text-white">
                <th className="py-1 border-r-2">S.No</th>
                <th className="py-1 border-r-2">Date</th>
                <th className="py-1 border-r-2 text-nowrap">Requested Name</th>
                <th className="py-1 border-r-2">Mobile No</th>
                <th className="py-1 border-r-2">Email ID</th>
                <th className="py-1 border-r-2">Comments</th>
                <th className="py-1 border-r-2">Status</th>
                <th className="py-1 border-r-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="bg-white text-center">
                  <td className="p-2 border-r-2">{index + 1}</td>
                  <td className="p-2 border-r-2">{item.date || "N/A"}</td>
                  <td className="p-2 border-r-2">{item.requestedName || "N/A"}</td>
                  <td className="p-2 border-r-2 whitespace-nowrap">
                    {item.mobileNo || "N/A"}
                  </td>
                  <td className="p-2 border-r-2">
                    {item.emailId && item.emailId.length > 20
                      ? `${item.emailId.slice(0, 20)}...`
                      : item.emailId || "N/A"}
                  </td>
                  <td className="p-2 border-r-2">{item.comments || "N/A"}</td>
                  <td className="p-2 border-r-2">
                    <span
                      className={`py-1 px-3 rounded-full text-sm font-medium ${
                        item.status === "ACCEPTED"
                          ? "bg-[#098C21] text-white"
                          : item.status === "PENDING"
                          ? "bg-[#FF9900] text-white"
                          : item.status === "REJECTED"
                          ? "bg-[#FF3636] text-white"
                          : ""
                      }`}
                    >
                      {item.status || "N/A"}
                    </span>
                  </td>
                  <td className="p-2 flex items-center gap-2">
                    <button
                      className="bg-[#2A8F4C] text-white p-1 rounded"
                      onClick={() => handleStatusUpdate(item.id, "ACCEPTED")}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-[#FF3636] text-white p-1 rounded"
                      onClick={() => handleStatusUpdate(item.id, "REJECTED")}
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-gray-500 text-white p-1 rounded"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="my-2 flex justify-center">
          <button
            type="button"
            className="flex gap-1 items-center bg-gradient-to-r from-[#00CEFF] to-[#0072FF] p-1 md:p-2 px-2 md:px-4 rounded-lg text-white"
          >
            View More
            <span>
              <IoIosArrowDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproachRequest;
