import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import Lottie from "lottie-react";
import allServicess from "./assets/allServices.json";
import GoogleFontLoader from "react-google-font-loader";

const Services = () => {
  const { datas } = useLoaderData();

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="absolute ">
        <Lottie className="fixed" animationData={allServicess} loop={true} />
      </div>
      <h1
        className="text-3xl md:text-4xl  lg:text-6xl text-center my-20"
        style={{ fontFamily: "Roboto Mono, monospaced" }}
      >
        All Services
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {datas?.map((data) => (
          <SingleService key={data._id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Services;
