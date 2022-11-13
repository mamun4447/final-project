import React, { useContext, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Lottie from "lottie-react";
import signup from "./assets/signup.json";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from "./context/UserContext";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { datas } = useLoaderData();
  const [error, setError] = useState("");
  const [role, setRole] = useState(true);
  const { user, googleLogIn, signUpUser, namePhoto } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (user) {
    return navigate("/");
  }

  const handleRole = (event) => {
    event.preventDefault();
    setRole(!role);
  };
  // const select = form.select.value;
  //=====User Email&Pass Signup====//
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const service = form.service.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPass.value;
    console.log(service);

    const provider = {
      name: name,
      service: service,
      email: email,
      phone: phone,
    };
    const userInfo = {
      name,
      email,
    };

    if (password !== confirm) {
      // console.log("match kore nai", password, confirm);
      return setError("Password's are not matched!");
    }

    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        handleNameUpdate(name);

        //======== post provider&user info ======
        if (!role) {
          fetch("http://localhost:5000/provider", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(provider),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        } else {
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }

        navigate(from, { replace: true });
      })
      .then((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  //=====Name Update====//
  const handleNameUpdate = (name) => {
    namePhoto(name)
      .then((result) => {})
      .catch((error) => setError(error.message));
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
            <div className="flex justify-center items-center gap-2 mt-10 text-center">
              <p>User</p>

              <input
                onClick={handleRole}
                type="checkbox"
                className="toggle toggle-info"
              />
              <p>Provider</p>
            </div>
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
              {role ? (
                ""
              ) : (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service Name</span>
                    </label>
                    <select
                      name="service"
                      className="select select-bordered w-full max-w-xs"
                    >
                      {datas.map((data) => (
                        <option key={data._id} value={data.title}>
                          {data.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Contact</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      defaultValue="+880 "
                      placeholder="contact"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </>
              )}

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
};;;;;;;;;;;;;;;;;;;;;;

export default SignUp;
