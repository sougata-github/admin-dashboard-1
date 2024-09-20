import Container from "../Container";
import { Trash2 } from "lucide-react";

const DangerZone = () => {
  return (
    <Container className="bg-red-900 opacity-50 bacdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8">
      <div className="flex item-center mb-4">
        <Trash2 className="text-red-400 mr-3 size-6" />
        <h2 className="text-heading">Danger Zone</h2>
      </div>

      <p className="text-gray-300 mb-4">
        Permanently delete your account and all of your content.
      </p>
      <button className="bg-red-600 md:hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duratio-300">
        Delete Account
      </button>
    </Container>
  );
};

export default DangerZone;
