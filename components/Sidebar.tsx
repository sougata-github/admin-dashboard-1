"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.aside
      className={cn(
        "hidden md:block relative z-10 transiton-all duration-300 flex-shrink-0 [transition-timing-function:linear]",
        isOpen ? "w-48" : "w-20"
      )}
      animate={{
        width: isOpen ? 192 : 80,
      }}
    >
      <div className="h-full bg-gray-800/50 backdrop-blur-md p-4 flex flex-col border-r border-white/5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
          className="p-2 rounded-lg full hover:bg-gray-700 transition-colors duration-300 max-w-fit hidden sm:block"
        >
          <Menu className="size-6" />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {sidebarLinks.map((item) => (
            <Link href={item.href} key={item.name}>
              <AnimatePresence>
                <>
                  <motion.div
                    className={cn(
                      "flex items-center p-4 pl-2 text-sm font-medium rounded-lg lg mb-2",
                      isOpen &&
                        "hover:bg-gray-700 transition-colors duration-300",
                      isOpen && item.href === pathname && "bg-gray-700"
                    )}
                  >
                    <item.icon
                      size={20}
                      style={{
                        color: `${item.color}`,
                        minWidth: "20px",
                      }}
                    />

                    {isOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{
                          x: -5,
                          opacity: 0,
                          width: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          width: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          width: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3,
                        }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </motion.div>
                </>
              </AnimatePresence>
            </Link>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
