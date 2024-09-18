"use client";

import { userData } from "@/constants";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../Container";
import { Edit, Search, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(userData);

  const handleChange = (value: string) => {
    const filteredData = userData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  return (
    <Container className="section-container mb-8">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4 md:gap-0">
          <h2 className="text-heading">Product List</h2>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
                handleChange(e.target.value);
              }}
              placeholder="Search products..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg
            pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {filteredData.map((item) => (
                <motion.tr
                  key={item.id}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {item.name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {item.email}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    <span className="px-2 text-xs inline-flex leading-5 font-semibold rounded-full bg-blue-500 text-blue-100">
                      {item.role}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    <span
                      className={cn(
                        "px-2 text-xs inline-flex leading-5 font-semibold rounded-full text-white bg-green-500",
                        item.status === "Active" && "bg-green-500",
                        item.status === "Inactive" && "bg-red-500"
                      )}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default UsersTable;
