import { useState } from "react";
import LogoutModal from "./LogoutModal/LogoutModal";

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={openModal}
      >
        Logout
      </button>
      <LogoutModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Logout;
