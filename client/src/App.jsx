import { Routes, Route } from "react-router-dom"

import { AuthProvider } from './contexts/AuthContext'

import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Navigation from "./components/navigation/Navigation"
import Logout from "./components/logout/Logout"
import Home from "./components/home/Home"
import Books from "./components/books/Books"

function App() {

  return (
    <>
      <div className="bg-cover bg-coverImg">
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
