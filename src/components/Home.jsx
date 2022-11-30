import Lottie from "lottie-react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import services from "./assets/services.json";
import { AuthContext } from "./context/UserContext";
import SmallSpinner from "./Spinner/SmallSpinner";

const Home = () => {
  const { loader } = useContext(AuthContext);
  return (
    <div className=" mt-16 px-5">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center ">
        <div className="lg:col-span-2 ">
          <h1 className="text-6xl my-3">
            Make Life easy with{" "}
            <span className="text-yellow-400">GreehoSheba</span>
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            doloribus nisi sequi nesciunt dolorum a beatae libero, distinctio
            voluptates nobis consequatur minus consequuntur laudantium cum fugit
            fugiat animi facere cupiditate!
          </p>
          <Link to="/services" title="All Services" className="btn btn-accent">
            {loader ? <SmallSpinner /> : "Make order"}
          </Link>
        </div>
        <div className=" lg:col-span-5 w-60 md:w-96 lg:w-full lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={services} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
