import Book from "../bookListItem/BookListItem.jsx";
const BooksList = ({ books }) => {
    return (
        <div className="bg-transparent flex flex-col gap-8 md:flex-row md:flex-wrap items-center justify-center text-black w-5/6 shadow-lg backdrop-filter border-2 border-gray-950 rounded-lg backdrop-blur-3xl bg-opacity-0">
            {books.length === 0 ? (
                <div className="h-[100vh] justify-self-center">
                    No books found!
                </div>
            ) : (
                books?.map((book) => <Book key={book._id} book={{ ...book }} />)
            )}
        </div>
    );
};

export default BooksList;
