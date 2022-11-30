import { useEffect, useState } from "react";

const useAdmin = async (email) => {
  const [isAdmin, setIsAdmin] = useState([]);
  useEffect(() => {
    fetch(`https://greehosheba.vercel.app/users?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data);
      });
  }, [email]);
  return isAdmin;
};

export default useAdmin;
