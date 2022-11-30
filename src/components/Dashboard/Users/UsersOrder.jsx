import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";

const UsersOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState();

    fetch(`https://greehosheba.vercel.app/user-orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          return setOrders(data.data);
        }
        toast.error(data.error);
      });

    const handleCancelOrder = (id) => {
      fetch(`https://greehosheba.vercel.app/order-delete/${id}`, {
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
      <div className="mx-10 w-full my-10">
        {orders?.length > 0 ? (
          <>
            <h1 className="text-4xl text-center my-10">My Orders</h1>
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
                    <tr key={order._id}>
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
                      <td>{order.status}</td>
                      <th>
                        <button
                          onClick={() => handleCancelOrder(order._id)}
                          disabled={order.status === "working"}
                          className="btn btn-error btn-xs"
                        >
                          Cantel
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
            No Orders
          </div>
        )}
      </div>
    );
};

export default UsersOrder;
