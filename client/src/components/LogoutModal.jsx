import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const LogoutModal = ({ onClose }) => {
    const { logoutHandler } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        logoutHandler();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
            <div className="bg-white rounded-lg p-8 shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Confirm Logout</h2>
                <p className="mb-4">Are you sure you want to logout?</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogoutModal;
