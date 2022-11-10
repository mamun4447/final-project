import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import order from "./assets/order.json";

const Order = () => {
  const datas = useLoaderData();
  return (
    <>
      {datas.map((data) => (
        <>
          <div className="absolute lg:w-[100vh]">
            <Lottie animationData={order} loop={true} />
          </div>
          <div className="hero flex items-center justify-center h-[100vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="text-center text-white lg:py-24 rounded-md lg:text-left bg-black bg-opacity-30 p-10  lg:w-[50%] ">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                  {data.title}
                </h1>
                <p className="py-6 hidden lg:block">{data.description}</p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body ">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Describe your problem</span>
                    </label>
                    <textarea
                      className="textarea h-52 w-full textarea-success"
                      placeholder="Describe..."
                    ></textarea>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary">
                        Find Service Provider
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Order;
