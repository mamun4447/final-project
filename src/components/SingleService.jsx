import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";

const SingleService = ({ data }) => {
  // console.log(data);
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
  />;
  return (
    <div>
      <Link
        to={`/services/${data._id}`}
        className="card z-0 w-full bg-base-100 shadow-xl image-full h-96 relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl"
        style={{ fontFamily: "Roboto Mono, monospaced" }}
      >
        <div>
          <img
            className="flex items-center justify-center"
            src={data.image}
            alt=""
          />
        </div>
        <div className="card-body flex items-center justify-center absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <h2 className=" text-3xl text-center ">{data.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default SingleService;
