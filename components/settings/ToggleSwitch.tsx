"use client";

import { cn } from "@/lib/utils";

const ToggleSwitch = ({
  label,
  isOn,
  onToggle,
}: {
  label: string;
  isOn: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-300">{label}</span>

      <button
        className={cn(
          "relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none",

          isOn ? "bg-indigo-500" : "bg-gray-600"
        )}
        onClick={onToggle}
      >
        <span
          className={cn(
            "inline-block size-4 transform transition-transform bg-white rounded-full",
            isOn ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
