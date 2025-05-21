import React, { use, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";

// import useTitle from "../utils/useTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, user, setUser, googleLogIn, updateUser, passwordRegex } =
    use(AuthContext) || {};
  const location = useLocation();
  const navigate = useNavigate();
  //   useTitle("Register - My App");

  const [ShowPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(`${location.state ? location.state : "/profile"}`);
    }
  }, [user, navigate, location.state]);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!passwordRegex.test(password)) {
      Swal.fire(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire("Register successful!");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            Swal.fire("Profile update failed. Please try again.");
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(error.message || "Registration failed. Please try again.");
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        Swal.fire("Login with Google successful!");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Google login failed. Please try again.");
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img
          src="https://images2.imgbox.com/5c/2a/MVLuEsVI_o.jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="card w-full max-w-sm shrink-0 py-5 border-2 border-secondary/30 rounded-xl">
          <h1 className="text-3xl font-bold text-center text-secondary">
            Create Account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label font-semibold">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />

              <label className="label font-semibold">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Enter your photo url"
                required
              />

              <label className="label font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Enter your email address"
                required
              />

              <label className="label font-semibold">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={ShowPassword ? "text" : "password"}
                  className="input w-full"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!ShowPassword)}
                  className="hover:bg-accent/20 rounded-full p-1.5 text-base text-secondary absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ease-in-out"
                >
                  {ShowPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="btn mt-4 bg-secondary/90 text-white"
              >
                Register
              </button>
              <p className="text-center font-bold text-primary/60">Or</p>
              <button
                type="button"
                onClick={handleGoogleLogIn}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <FcGoogle size={20} />
                Login with Google
              </button>
            </fieldset>
            <p className="font-medium text-center text-accent">
              Already have an account?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
