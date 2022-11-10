import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signup from "./assets/signup.json";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "./context/UserContext";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const { user, googleLogIn, signUpUser, namePhoto } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  //=====User Email&Pass Signup====//
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPass.value;
    console.log(name, email, password);

    if (password !== confirm) {
      // console.log("match kore nai", password, confirm);
      return setError("Password's are not matched!");
    }

    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate("/");
      })
      .then((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  //=====google Login=====//
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleLogIn(provider)
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center mt-7">
              Registration!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              {/* ====name==== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* ====email===== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* ======password====== */}
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
              </div>

              {/* =====confirmPassword===== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPass"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-500">{error}</p>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
              </div>
              <p>
                Already have an account?
                <Link
                  className="underline text-accent underline-offset-1"
                  to="/login"
                >
                  Log in
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
            </form>
          </div>
          <div className="w-[40%]">
            <Lottie animationData={signup} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
