import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookContext from "../../contexts/BookContext";
import { MdTitle } from "react-icons/md";
import { AiOutlineFileImage } from "react-icons/ai";
import { BsBook, BsPerson } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import Path from "../../paths";
import * as bookService from "../../services/bookService";

const CreateBookFormKeys = {
    Title: "title",
    Cover: "cover",
    Description: "description",
    Author: "author",
    Publisher: "publisher",
    Year: "year",
    Series: "series",
};

const UpdateBookModal = ({ book, toggleUpdateModal }) => {
    const { updateBookInState } = useContext(BookContext);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        [CreateBookFormKeys.Title]: Yup.string().required("Title is required"),
        [CreateBookFormKeys.Cover]: Yup.string()
            .url("Must be a valid URL")
            .required("Cover URL is required"),
        [CreateBookFormKeys.Description]: Yup.string().required(
            "Description is required"
        ),
        [CreateBookFormKeys.Author]:
            Yup.string().required("Author is required"),
        [CreateBookFormKeys.Publisher]: Yup.string().required(
            "Publisher is required"
        ),
        [CreateBookFormKeys.Year]: Yup.string()
            .matches(/^\d{4}$/, "Must be a valid year")
            .required("Year is required"),
        [CreateBookFormKeys.Series]: Yup.string().notRequired(),
    });

    const formik = useFormik({
        initialValues: {
            [CreateBookFormKeys.Title]: book.title || "",
            [CreateBookFormKeys.Cover]: book.cover || "",
            [CreateBookFormKeys.Description]: book.description || "",
            [CreateBookFormKeys.Author]: book.author || "",
            [CreateBookFormKeys.Publisher]: book.publisher || "",
            [CreateBookFormKeys.Year]: book.year || "",
            [CreateBookFormKeys.Series]: book.series || "",
        },
        validationSchema,
        onSubmit: (values) => {
            bookService
                .updateBook(book._id, values)
                .then((res) => updateBookInState(res._id, values));
            toggleUpdateModal();
            navigate(Path.Books);
        },
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-slate-800 border border-slate-400 rounded-md w-1/4 p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-0 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">
                    Update Book
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    {/* Title */}
                    <div className="relative my-4">
                        <input
                            type="text"
                            id={CreateBookFormKeys.Title}
                            name={CreateBookFormKeys.Title}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer input-autofill-fix"
                            placeholder=""
                            value={formik.values[CreateBookFormKeys.Title]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Title}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Title
                        </label>
                        <MdTitle className="absolute top-4 right-4" />
                        {formik.touched[CreateBookFormKeys.Title] &&
                            formik.errors[CreateBookFormKeys.Title] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors[CreateBookFormKeys.Title]}
                                </div>
                            )}
                    </div>

                    {/* Cover URL */}
                    <div className="relative my-4">
                        <input
                            type="text"
                            id={CreateBookFormKeys.Cover}
                            name={CreateBookFormKeys.Cover}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer input-autofill-fix"
                            placeholder=""
                            value={formik.values[CreateBookFormKeys.Cover]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Cover}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Cover URL
                        </label>
                        <AiOutlineFileImage className="absolute top-4 right-4" />
                        {formik.touched[CreateBookFormKeys.Cover] &&
                            formik.errors[CreateBookFormKeys.Cover] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors[CreateBookFormKeys.Cover]}
                                </div>
                            )}
                    </div>

                    {/* Description */}
                    <div className="relative my-4">
                        <textarea
                            id={CreateBookFormKeys.Description}
                            name={CreateBookFormKeys.Description}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            placeholder=""
                            rows="12"
                            value={
                                formik.values[CreateBookFormKeys.Description]
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Description}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Description
                        </label>
                        {formik.touched[CreateBookFormKeys.Description] &&
                            formik.errors[CreateBookFormKeys.Description] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {
                                        formik.errors[
                                            CreateBookFormKeys.Description
                                        ]
                                    }
                                </div>
                            )}
                    </div>

                    {/* Author */}
                    <div className="relative my-4">
                        <input
                            type="text"
                            id={CreateBookFormKeys.Author}
                            name={CreateBookFormKeys.Author}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer input-autofill-fix"
                            placeholder=""
                            value={formik.values[CreateBookFormKeys.Author]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Author}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Author
                        </label>
                        <BsPerson className="absolute top-4 right-4" />
                        {formik.touched[CreateBookFormKeys.Author] &&
                            formik.errors[CreateBookFormKeys.Author] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors[CreateBookFormKeys.Author]}
                                </div>
                            )}
                    </div>

                    {/* Publisher */}
                    <div className="relative my-4">
                        <input
                            type="text"
                            id={CreateBookFormKeys.Publisher}
                            name={CreateBookFormKeys.Publisher}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer input-autofill-fix"
                            placeholder=""
                            value={formik.values[CreateBookFormKeys.Publisher]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Publisher}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Publisher
                        </label>
                        <BsBook className="absolute top-4 right-4" />
                        {formik.touched[CreateBookFormKeys.Publisher] &&
                            formik.errors[CreateBookFormKeys.Publisher] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {
                                        formik.errors[
                                            CreateBookFormKeys.Publisher
                                        ]
                                    }
                                </div>
                            )}
                    </div>

                    {/* Year */}
                    <div className="relative my-4">
                        <input
                            type="text"
                            id={CreateBookFormKeys.Year}
                            name={CreateBookFormKeys.Year}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer input-autofill-fix"
                            placeholder=""
                            value={formik.values[CreateBookFormKeys.Year]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Year}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Year
                        </label>
                        <ImBooks className="absolute top-4 right-4" />
                        {formik.touched[CreateBookFormKeys.Year] &&
                            formik.errors[CreateBookFormKeys.Year] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors[CreateBookFormKeys.Year]}
                                </div>
                            )}
                    </div>

                    {/* Series */}
                    <div className="relative my-4">
                        <input
                            type="text"
                            id={CreateBookFormKeys.Series}
                            name={CreateBookFormKeys.Series}
                            className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer input-autofill-fix"
                            placeholder=""
                            value={formik.values[CreateBookFormKeys.Series]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor={CreateBookFormKeys.Series}
                            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Series
                        </label>
                        <BsBook className="absolute top-4 right-4" />
                        {formik.touched[CreateBookFormKeys.Series] &&
                            formik.errors[CreateBookFormKeys.Series] && (
                                <div className="text-red-500 text-xs mt-1">
                                    {formik.errors[CreateBookFormKeys.Series]}
                                </div>
                            )}
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                        type="submit"
                    >
                        Update Book
                    </button>
                    <button
                        className="w-full mb-4 text-[18px] rounded-full bg-red-500 text-white py-2 transition-colors duration-300"
                        type="button"
                        onClick={toggleUpdateModal}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBookModal;
