import { User, User2 } from "lucide-react";

import Container from "../Container";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <Container>
      <SettingSection
        icon={
          <User
            className="
text-indigo-400 mr-4 size-6"
          />
        }
        title="Profile"
      >
        <div className="flex flex-col sm:flex-row items-center mb-6 gap-6">
          <div className="inline-flex p-2 rounded-full bg-gray-900 items-center justify-center">
            <User2 className="size-10" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
            <p className="text-gray-400">john.doe@example.com</p>
          </div>
        </div>
        <button className="bg-indigo-600 md:hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto">
          Edit Profile
        </button>
      </SettingSection>
    </Container>
  );
};

export default Profile;
