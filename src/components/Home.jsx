import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import services from "./assets/services.json";

const Home = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto flex flex-row items-center justify-center ">
        <div className="col-span-2 ">
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
            Make order
          </Link>
        </div>
        <div className="relative col-span-5 w-full lg:w-full lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={services} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
