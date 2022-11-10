import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import login from "./assets/login.json";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LogIn = () => {
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center mt-7">Login now!</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
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
                <span className="bg-slate-200 p-2 rounded-full">
                  <FaGoogle />
                </span>
                <span className="bg-slate-200 p-2 rounded-full">
                  <FaFacebook />
                </span>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <Lottie animationData={login} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
