import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import order from "./assets/order.json";
import { useContext } from "react";
import { AuthContext } from "./context/UserContext";
import toast from "react-hot-toast";

const Order = () => {
  const { datas } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(datas);

  const handleOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const description = form.description.value;
    const price = form.price.value;

    const orderInfo = {
      service: datas.title,
      price,
      description,
      serviceId: datas._id,
      user_email: user.email,
      status: "pending",
      provider_email: "",
    };

    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          navigate("/dashboard");
          return toast.success(data.message);
        }
        toast.error(data.message);
      });
  };
  return (
    <>
      <div className="absolute lg:w-[100vh]">
        <Lottie animationData={order} loop={true} />
      </div>
      <div className="hero flex items-center justify-center h-[100vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center text-white lg:py-24 rounded-md lg:text-left bg-black bg-opacity-30 p-10  lg:w-[50%] ">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
              {datas.title}
            </h1>
            <p className="py-6 hidden lg:block">{datas.description}</p>
          </div>
          <form
            onSubmit={handleOrder}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body ">
              <h1 className="text-2xl font-bold">{datas.title}</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Describe about service</span>
                </label>
                <textarea
                  className="textarea h-32 w-full textarea-accent"
                  name="description"
                  placeholder="describe..."
                ></textarea>

                {/* ===Price=== */}
                <label className="label">
                  <span className="label-text">Your budget</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="your budget(tk)"
                  className="input input-bordered input-accent w-full max-w-xs"
                />

                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Find Service Provider
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};;

export default Order;
