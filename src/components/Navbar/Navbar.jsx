import React, { use } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = use(AuthContext);

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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="md:hidden pl-0 p-3">
            <FaBarsStaggered />
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img
            className="w-10 mr-2 hidden md:flex"
            src="https://images2.imgbox.com/d5/64/82KFidmi_o.png"
            alt="Logo"
          />
          <span className="text-3xl italic font-bold text-secondary">
            BotaNest
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "Guest"}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
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
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-secondary"
            >
              Logout
            </button>
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
