import Header from "@/components/Header";
import Profile from "@/components/settings/Profile";
import Security from "@/components/settings/Security";
import DangerZone from "@/components/settings/DangerZone";
import Notifications from "@/components/settings/Notifications";
import ConnectedAccounts from "@/components/settings/ConnectedAccounts";

const page = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 overflow-x-clip">
      <Header title="Settings" />

      <main className="flex flex-col max-w-4xl mx-auto gap-8 py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default page;
