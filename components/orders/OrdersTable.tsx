"use client";

import { orderData } from "@/constants";

import { useState } from "react";
import Container from "../Container";
import { Edit, Eye, Search, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(orderData);

  const handleChange = (value: string) => {
    const filteredData = orderData.filter((item) =>
      item.id.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  return (
    <Container className="section-container mb-8 lg:col-span-2 overflow-x-clip">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4 md:gap-0">
          <h2 className="text-heading mb-4">Orders List</h2>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
                handleChange(e.target.value);
              }}
              placeholder="Search orders"
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
                  Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
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
                    {item.id}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {item.customer}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {item.total}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    <span
                      className={cn(
                        "px-2 text-xs inline-flex leading-5 font-semibold rounded-full text-white bg-green-500",
                        item.status === "Processing" &&
                          "bg-yellow-200 text-yellow-600",
                        item.status === "Delivered" &&
                          "bg-green-200 text-green-600",
                        item.status === "Shipped" &&
                          "bg-blue-200 text-blue-600",
                        item.status === "Pending" && "bg-red-200 text-red-600"
                      )}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {item.date}
                  </td>

                  <td className="pl-10 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                      <Eye size={18} />
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

export default OrdersTable;
