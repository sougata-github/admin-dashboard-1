"use client";

import { useState } from "react";

import { Bell } from "lucide-react";
import Container from "../Container";
import ToggleSwitch from "./ToggleSwitch";
import SettingSection from "./SettingSection";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  return (
    <Container>
      <SettingSection
        icon={<Bell className="text-indigo-400 mr-4 size-6" />}
        title="Notifications"
      >
        <ToggleSwitch
          label="Push Notifications"
          isOn={notifications.push}
          onToggle={() => {
            setNotifications((prev) => ({
              ...prev,
              push: !notifications.push,
            }));
          }}
        />
        <ToggleSwitch
          label="Email Notifications"
          isOn={notifications.email}
          onToggle={() => {
            setNotifications((prev) => ({
              ...prev,
              email: !notifications.email,
            }));
          }}
        />
        <ToggleSwitch
          label="SMS Notifications"
          isOn={notifications.sms}
          onToggle={() => {
            setNotifications((prev) => ({ ...prev, sms: !notifications.sms }));
          }}
        />
      </SettingSection>
    </Container>
  );
};

export default Notifications;
