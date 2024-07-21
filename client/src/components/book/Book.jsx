import { GiOpenBook } from 'react-icons/gi'

const Book = (
    book
) => {
    return (
        <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div
                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <GiOpenBook />
                    </div>
                    <h2 className="text-white text-lg font-medium">{book.title}</h2>
                </div>
                <div>
                    <img className="block w-96 h-96 aspect-auto" src={book.cover} alt="" />
                </div>
                <div className="mt-4 flex flex-col self-center items-center w-2/3 flex-grow bg-indigo-500 rounded-2xl hover:bg-indigo-800 transition">
                    <a href="#" className="m-2 text-white inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Book