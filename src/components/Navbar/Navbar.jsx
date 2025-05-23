import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { themeChange } from "theme-change";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = use(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    themeChange(false); // false for React project
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Logout successful!");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Something is wrong.");
      });
  };

  const links = (
    <>
      <li>
        <NavLink className="text-lg font-medium" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="text-lg font-medium" to="/allPlants">
          All Plants
        </NavLink>
      </li>

      <li>
        <NavLink className="text-lg font-medium" to="/addPlant">
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg font-medium" to="/myPlants">
          My Plants
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 z-50 lg:px-10">
      <div className="navbar-start">
        <div className="relative md:hidden">
          <button
            onClick={toggleMenu}
            className="transition-transform duration-300 ease-in-out relative w-6 h-6 flex text-secondary"
          >
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out transform"
              style={{ opacity: isOpen ? 0 : 1, transform: "rotate(0deg)" }}
            >
              <FaBars className="w-full h-full" />
            </div>
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out transform"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              <FaXmark className="w-full h-full" />
            </div>
          </button>

          {isOpen && (
            <ul className="absolute left-0 z-10 mt-5 w-52 rounded-box bg-base-100 p-2 shadow menu menu-sm border">
              {links}
            </ul>
          )}
        </div>

        <Link to="/" className="flex items-center">
          <img
            className="w-10 mr-2 hidden md:flex"
            src="https://images2.imgbox.com/d5/64/82KFidmi_o.png"
            alt="Logo"
          />
          <span className="hidden md:flex text-3xl italic font-bold text-secondary">
            BotaNest
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* theme toggle button */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={(e) => {
              const newTheme = e.target.checked ? "forest" : "light";
              document.documentElement.setAttribute("data-theme", newTheme);
              localStorage.setItem("theme", newTheme);
            }}
            defaultChecked={localStorage.getItem("theme") === "forest"}
          />

          <IoSunnyOutline size={28} className="swap-off fill-current" />

          <IoMoonOutline size={28} className="swap-on fill-current" />
        </label>

        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "Guest"}
            >
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co.com/Cs13Xyvv/icons8-avatar-96.png"
                  }
                  className="w-full h-full object-cover"
                  alt="User Avatar"
                />
              </div>
            </div>
            <div onClick={handleLogout} className="text-secondary">
              <button className="hidden md:flex btn btn-outline btn-secondary">
                Logout
              </button>
              <FiLogOut size={25} className="md:hidden" />
            </div>
          </>
        ) : (
          !["/login", "/register"].includes(location.pathname) && (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-outline btn-secondary">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline btn-secondary hidden md:flex"
              >
                Register
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
