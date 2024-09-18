"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children, className }: Props) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y: 5,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
