import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { BookProvider } from "./contexts/BookContext";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
import BooksPage from "./components/booksPage/BooksPage";
import MainLayout from "./layouts/MainLayout";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/notFound/NotFound";
import AdminRoute from "./guards/AdminRoute";
import CreateBook from "./components/createBook/CreateBook";
import { ReviewProvider } from "./contexts/ReviewContext";
import AboutPage from "./components/About/About";

function App() {
    return (
        <>
            <div className="bg-cover bg-coverImg">
                <AuthProvider>
                    <BookProvider>
                        <ReviewProvider>
                            <MainLayout>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route
                                        path="/books"
                                        element={<BooksPage />}
                                    />
                                    <Route
                                        path="/about"
                                        element={<AboutPage />}
                                    />

                                    <Route element={<PrivateRoute />}>
                                        <Route
                                            path="/books/:id"
                                            element={<BookDetails />}
                                        />
                                    </Route>

                                    <Route element={<AdminRoute />}>
                                        <Route
                                            path="add-book"
                                            element={<CreateBook />}
                                        />
                                    </Route>

                                    <Route element={<PublicRoute />}>
                                        <Route
                                            path="/login"
                                            element={<Login />}
                                        />
                                        <Route
                                            path="/register"
                                            element={<Register />}
                                        />
                                    </Route>
                                    <Route path="/*" element={<NotFound />} />
                                </Routes>
                            </MainLayout>
                        </ReviewProvider>
                    </BookProvider>
                </AuthProvider>
            </div>
        </>
    );
}

export default App;
