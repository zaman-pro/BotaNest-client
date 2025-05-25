import React, { use, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../../utils/useTitle";

const Login = () => {
  const { user, logIn, googleLogIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle("Login - BotaNest");

  const [ShowPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(`${location.state ? location.state : "/"}`);
    }
  }, [user, navigate, location.state]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire("Please fill in all fields.");
      return;
    }

    logIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Please check your credentials.",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        Swal.fire({
          title: "Google Login successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Google login failed. Please try again.",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
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
        <div className="card w-full max-w-xl py-5 border-2 border-secondary/30 rounded-xl">
          <h1 className="text-3xl font-bold text-center">
            Login to <span className="text-secondary">BotaNest</span>
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
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

              <div>
                <Link
                  to="/forgotPassword"
                  state={location.state}
                  className="link link-hover text-secondary"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn mt-4 bg-secondary/90 text-white"
              >
                Login
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
              Don't have an account?{" "}
              <Link
                state={location.state}
                to="/register"
                className="text-secondary"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
