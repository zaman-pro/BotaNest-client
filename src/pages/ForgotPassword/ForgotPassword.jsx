import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useTitle from "../../utils/useTitle";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useTitle("Reset Passoword - BotaNest");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Please enter your email.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Check your inbox for reset link!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire(
          err.code === "auth/user-not-found"
            ? "Email not registered."
            : "Failed to send reset email."
        );
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="card w-full max-w-sm py-5 border-2 border-secondary/30 rounded-xl">
        <h1 className="text-2xl font-bold text-center text-secondary flex items-center justify-center gap-2">
          Forgot Password
        </h1>
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <label className="block">
            <span className="text-gray-700">Your Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border rounded p-2"
              placeholder="you@example.com"
            />
          </label>
          <button type="submit" className="btn bg-secondary text-white w-full">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
