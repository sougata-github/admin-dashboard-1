"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { sidebarLinks } from "@/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 bg-gray-800 px-4 py-12 flex flex-col border-b border-gray-700"
      >
        <nav className="flex flex-col mt-2">
          {sidebarLinks.map((item) => (
            <Link href={item.href} key={item.name}>
              <div
                className={cn(
                  "flex items-center p-4 pl-2 text-base font-medium rounded-lg mb-2",
                  item.href === pathname && "bg-gray-700"
                )}
              >
                <item.icon
                  size={20}
                  style={{
                    color: `${item.color}`,
                    minWidth: "20px",
                  }}
                />
                <span className="ml-4 whitespace-nowrap">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
