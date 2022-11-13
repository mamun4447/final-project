import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "./assets/login.json";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "./context/UserContext";
import { GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
  const [error, setError] = useState("");
  const { user, googleLogIn, userLogIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate("/");
  }

  //=======Email & password Login=========//
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  //=====Google Login=====//
  const handleGoogleLogin = (event) => {
    event.preventDefault();

    googleLogIn(provider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <form
            onSubmit={handleLogin}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <h1 className="text-4xl font-bold text-center mt-7">Login now!</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="text-red-500">{error}</p>
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link
                  className="underline text-accent underline-offset-1"
                  to="/signup"
                >
                  Register
                </Link>
              </p>

              {/* ------------Social Media SignIn----------- */}
              <div className="flex items-center justify-center m-2 text-3xl gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="bg-slate-200 p-2 rounded-full"
                >
                  <FaGoogle />
                </button>
                <span className="bg-slate-200 p-2 rounded-full">
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
          <div className="w-[40%]">
            <Lottie animationData={login} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
