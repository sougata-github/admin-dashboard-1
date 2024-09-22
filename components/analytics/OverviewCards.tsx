"use client";

import { overviewData } from "@/constants";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {overviewData.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-gray-800/50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/5"
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.1,
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
              <p className="mt-1 text-xl font-semibold text-gray-100"></p>
            </div>

            <div
              className={cn(
                "p-3 rounded-full",
                item.change >= 0 ? "bg-green-500/20" : "bg-red-500/20"
              )}
            >
              <item.icon
                className={cn(
                  "size-6",

                  item.change >= 0 ? "text-green-500" : "text-red-500"
                )}
              />
            </div>
          </div>

          <div
            className={cn(
              "mt-4 flex items-center",
              item.change >= 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {item.change >= 0 ? (
              <ArrowUpRight className="size-5" />
            ) : (
              <ArrowDownRight className="size-5" />
            )}
            <span className="ml-1 text-sm font-medium">{item.change}%</span>
            <span className="ml-2 text-sm text-gray-400">vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
