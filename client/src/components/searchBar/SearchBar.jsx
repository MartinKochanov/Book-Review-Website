const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="w-full my-4 px-4 text-black">
            <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={onSearchChange}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default SearchBar;
