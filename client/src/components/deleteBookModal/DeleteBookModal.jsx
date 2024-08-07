const DeleteBookModal = ({ handleConfirmDeleteClick, toggleModal }) => {
    return (
        <div className="fixed text-black inset-0 flex items-center justify-center z-50 transition">
            <div
                className="bg-black bg-opacity-50 absolute inset-0"
                onClick={toggleModal}
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                <p className="mb-4">
                    Are you sure you want to delete this book?
                </p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={toggleModal}
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirmDeleteClick}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBookModal;
