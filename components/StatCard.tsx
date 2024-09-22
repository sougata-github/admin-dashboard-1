"use client";

import { motion } from "framer-motion";

export type StatType = {
  name: string;
  value: string;
  color: string;
  icon: React.ReactNode;
};

const StatCard = ({ name, icon, value, color }: StatType) => {
  return (
    <motion.div className="bg-gray-800/50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl lg border border-white/5 cursor-pointer">
      <div className="px-4 py-5 sm:p-6 flex flex-col gap-2">
        <span className="flex items-center text-sm font-medium text-gray-400">
          {icon}
          {name}
        </span>
        <p className="text-xl md:text-2xl font-semibold text-gray-100">
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
