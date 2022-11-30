import { useEffect, useState } from "react";

const useUser = async (email) => {
  const [isProvider, setIsProvider] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/users?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsProvider(data);
      });
  }, [email]);
  return isProvider;
};

export default useUser;
