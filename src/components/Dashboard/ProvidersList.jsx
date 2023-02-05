import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const ProvidersList = () => {
  const [providersList, setProvidersList] = useState();

  fetch("https://greehosheba.vercel.app/providers-list")
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        return setProvidersList(data.data.reverse());
      }
      toast.error(data?.error);
    });

  //Delete Provider
  const handleDeleteProvider = (id) => {
    fetch(`https://greehosheba.vercel.app/provider-delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          return toast.success(data.message);
        }
        toast.error(data.error);
      });
  };

  return (
    <div className="w-full mx-10">
      <h1 className="text-4xl my-10 text-center">Service Providers</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {providersList?.map((provider, i) => (
              <tr key={provider?._id} className="active">
                <th>{i}</th>
                <td>{provider.name}</td>
                <td>{provider.email}</td>
                <td>{provider.service}</td>
                <td>
                  {/* <button className="btn btn-accent mr-2 btn-sm">
                    Make Admin
                  </button> */}
                  <button
                    onClick={() => handleDeleteProvider(provider?._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete provider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvidersList;
