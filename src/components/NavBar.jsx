import React, { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/UserContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const hangleLogOut = (event) => {
    event.preventDefault();
    logOut();
  };

  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" flex items-center justify-between">
          <Link
            to="/"
            title="Greeho Sheba"
            className="relative flex items-center"
          >
            <i className="text-yellow-400 text-2xl">
              <FaHome />
            </i>
            <span className="ml-2 text-2xl text-accent font-bold tracking-wide ">
              GreehoSheba
            </span>
          </Link>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                title="Home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                title="All Services"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                All Services
              </Link>
            </li>
            {user?.email && (
              <li>
                <Link
                  to="/dashboard"
                  title="All Services"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About us
              </Link>
            </li>
            <li>
              {/* Optional login or profile */}
              {user ? (
                <div className="flex items-center ">
                  <button
                    onClick={hangleLogOut}
                    className="btn btn-accent"
                    title="Log In"
                  >
                    Log Out
                  </button>
                  <div
                    className="avatar ml-5 tooltip-left"
                    data-tip={user.displayName}
                  >
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="" />
                      ) : (
                        <img
                          src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="btn btn-accent" title="Log In">
                  Log In
                </Link>
              )}
            </li>
          </ul>

          {/* -----------------
          -----Mobile Nav-----
          --------------------- */}

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="w-full top-0 left-0">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="">
                      <Link
                        to="/"
                        title="Greeho Sheba"
                        className="inline-flex items-center"
                      >
                        <i className="text-yellow-400 text-2xl">
                          <FaHome />
                        </i>
                        <span className="ml-2 text-2xl text-accent font-bold tracking-wide ">
                          GreehoSheba
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          All Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          title="All Services"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        {/* Optional login or profile */}
                        {user ? (
                          <div className="flex items-center ">
                            <button
                              onClick={hangleLogOut}
                              className="btn btn-accent"
                              title="Log In"
                            >
                              Log Out
                            </button>
                            <div
                              className="avatar ml-5 tooltip"
                              data-tip={user.displayName}
                            >
                              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {user?.photoURL ? (
                                  <img src={user.photoURL} alt="" />
                                ) : (
                                  <img
                                    src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
                                    alt=""
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            to="/login"
                            className="btn btn-accent"
                            title="Log In"
                          >
                            Log In
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
