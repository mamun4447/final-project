import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import useUser from "../useHooks/useUser";

const AllUsers = () => {
  const [user, setUser] = useState([]);

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="ml-16 md:ml-52 lg:ml-52 mt-20">
      {users?.message ? (
        <p>{users?.message}</p>
      ) : (
        <table className="table w-[100vh]">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr className="hover">
                <th>{i}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;
