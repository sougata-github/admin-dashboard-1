"use client";

import { cn } from "@/lib/utils";
import { connectedAccountsData } from "@/constants";

import { useState } from "react";
import Container from "../Container";
import { HelpCircle, Plus } from "lucide-react";
import SettingSection from "./SettingSection";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(
    connectedAccountsData
  );

  return (
    <Container>
      <SettingSection
        title="Connected Accounts"
        icon={<HelpCircle className="mr-4 text-indigo-400 size-6" />}
      >
        {connectedAccounts.map((account, index) => (
          <div
            key={account.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex gap-4">
              <account.icon className="size-6" />
              <span className="text-gray-300">{account.name}</span>
            </div>

            <button
              className={cn(
                "px-3 py-1 rounded-lg",

                account.connected
                  ? "bg-green-600 md:hover:bg-gray-700"
                  : "bg-gray-600 md:hover:bg-gray-700"
              )}
              onClick={() => {
                setConnectedAccounts((prev) =>
                  prev.map((acc) => {
                    if (acc.id === account.id) {
                      return {
                        ...acc,
                        connected: !acc.connected,
                      };
                    }

                    return acc;
                  })
                );
              }}
            >
              {account.connected ? "Connected" : "Connect"}
            </button>
          </div>
        ))}

        <button className="mt-4 flex items-center text-indigo-400 md:hover:text-indigo-300 transition duration-200">
          <Plus className="size-6 mr-2" />
          <span>Add account</span>
        </button>
      </SettingSection>
    </Container>
  );
};

export default ConnectedAccounts;
