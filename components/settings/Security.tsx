"use client";

import { useState } from "react";

import { Lock } from "lucide-react";
import Container from "../Container";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <Container>
      <SettingSection
        icon={<Lock className="text-indigo-400 mr-4 size-6" />}
        title="Security"
      >
        <ToggleSwitch
          label="Two-Factor Authentication"
          isOn={twoFactor}
          onToggle={() => {
            setTwoFactor((prev) => !prev);
          }}
        />

        <div className="mt-4">
          <button className="bg-indigo-600 md:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </SettingSection>
    </Container>
  );
};

export default Security;
