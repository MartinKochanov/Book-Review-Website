import { Link } from "react-router-dom";
import Path from "../../paths";
import { useContext, useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import AuthContext from "../../contexts/AuthContext";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const { isAuthenticated } = useContext(AuthContext);

  const content = (
    <>
      <div className="lg:hidden pt-20 fixed flex items-center justify-center w-full h-full left-0 right-0 bg-slate-900 transition z-50">
        <ul className="text-center text-xl">
          <Link to={Path.Home} onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link to={Path.About} onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link to={Path.Books} onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Books
            </li>
          </Link>
          {!isAuthenticated && (
            <>
              <Link to={Path.Login} onClick={handleClick}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Login
                </li>
              </Link>
              <Link to={Path.Register} onClick={handleClick}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Register
                </li>
              </Link>
            </>
          )}

          {isAuthenticated && (
            <>
              <Link to={Path.AddBook} onClick={handleClick}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Add Book
                </li>
              </Link>
              <Link to={Path.Logout} onClick={handleClick}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Logout
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-black">
      <div className="flex justify-between z-50 text-white px-8 lg:py-3 lg:px-20">
        <div className="flex items-center flex-1">
          <Link
            to="/"
            className="text-3xl font-bold bg-logo bg-cover block w-20 h-20"
          >
            <span className="hidden">Logo</span>
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div>
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to={Path.Home}>
                <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                  Home
                </li>
              </Link>
              <Link to={Path.About}>
                <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                  About
                </li>
              </Link>
              <Link to={Path.Books}>
                <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                  Books
                </li>
              </Link>
              {!isAuthenticated && (
                <>
                  <Link to={Path.Login}>
                    <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                      Login
                    </li>
                  </Link>
                  <Link to={Path.Register}>
                    <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                      Register
                    </li>
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link to={Path.AddBook}>
                    <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                      Add Book
                    </li>
                  </Link>
                  <Link to={Path.Logout}>
                    <li className="hover:text-indigo-500 transsition border-b-2 border-slate-900 hover:border-indigo-500 cursor-pointer transition-colors">
                      Logout
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button>
          <div className="block md:hidden transition" onClick={handleClick}>
            {click ? (
              <FaTimes className="fixed right-8 z-[60]" />
            ) : (
              <CiMenuFries className="absolute right-8 z-[60]" />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
