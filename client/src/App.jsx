import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Navigation from "./components/navigation/Navigation";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";
import { BookProvider } from "./contexts/BookContext";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
import BooksList from "./components/booksList/BooksList";

function App() {
  return (
    <>
      <div className="bg-cover bg-coverImg">
        <AuthProvider>
          <BookProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BooksList />} />

              <Route element={<PrivateRoute />}>
                <Route path="/logout" element={<Logout />} />
              </Route>

              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
            </Routes>
          </BookProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
