import BooksList from "../booksList/BooksList";
import SearchBar from "../searchBar/SearchBar";
import BookContext from "../../contexts/BookContext";
import { useContext, useState } from "react";

const BooksPage = () => {
    const { books } = useContext(BookContext);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center min-h-screen">
            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />
            <BooksList books={filteredBooks} />
        </div>
    );
};

export default BooksPage;
