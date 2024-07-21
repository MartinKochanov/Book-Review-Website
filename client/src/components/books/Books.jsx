import { useEffect, useState } from "react";
import BooksLayout from "../../layouts/BooksLayout";
import * as bookService from "../../services/bookService"
import Book from "../book/Book";
const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        bookService.getAll()
            .then(setBooks)
    }, [])


    return (
        <BooksLayout>
            <div className="bg-transparent flex flex-col gap-8 md:flex-row md:flex-wrap items-center justify-center text-black w-5/6 shadow-lg backdrop-filter border-2 border-gray-950 rounded-lg backdrop-blur-3xl bg-opacity-0">
                {books.length === 0 ?
                    <div className="h-[100vh] justify-self-center">No books found!</div> :
                    <>{books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}
                        {books.map(book => { console.log(book._id); return (<Book key={book._id} {...book} />) })}

                    </>
                }
            </div>
        </BooksLayout>
    )
}


export default Books;