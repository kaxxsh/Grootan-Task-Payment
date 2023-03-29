import React, { useState, createContext, useEffect } from "react";
import supabase from "../../supabase";
export const UserContext = createContext();

function Userprovider({ children }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [User, setUser] = useState(null);
  const [Price, setPrice] = useState(null);

  const handleSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    setUser(data.session.user.id);
    // console.log(data, error);
  };

  useEffect(() => {
    handleSession();
  }, []);

  return (
    <UserContext.Provider
      value={{
        User,
        setUser,
        Email,
        setEmail,
        Password,
        setPassword,
        Price,
        setPrice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default Userprovider;
