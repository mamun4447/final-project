import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const UserList = () => {
  const [usersList, setUsersList] = useState();

  fetch("https://greehosheba.vercel.app/users-list")
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        return setUsersList(data.data.reverse());
      }
      toast.error(data?.error);
    });

  //Delete Provider
  const handleDeleteUser = (id) => {
    fetch(`https://greehosheba.vercel.app/user-delete/${id}`, {
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
      <h1 className="text-4xl my-10 text-center">All Customers</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList?.map((user, i) => (
              <tr key={user?._id} className="active">
                <th>{i}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* <button className="btn btn-accent mr-2 btn-sm">
                    Make Admin
                  </button> */}
                  <button
                    onClick={() => handleDeleteUser(user?._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete user
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

export default UserList;
