import React from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";

const UserHistory = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState();

  fetch(`https://greehosheba.vercel.app/user-histry/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        return setOrders(data.data);
      }
      toast.error(data.error);
    });
  return (
    <div className="mx-10 w-full my-10">
      {orders?.length > 0 ? (
        <>
          <h1 className="text-4xl text-center my-10">My History</h1>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, i) => (
                  <tr key={order?._id}>
                    <th>{i}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{order.service}</div>
                          <div className="text-sm opacity-50">
                            Price: {order.price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{order.description}</td>
                    <td>{order.provider_email}</td>
                    <th>
                      <button
                        // onClick={() => HandleAcceptOrder(order._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete Histor
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-5xl flex justify-center items-center">
          No History
        </div>
      )}
    </div>
  );
};

export default UserHistory;
