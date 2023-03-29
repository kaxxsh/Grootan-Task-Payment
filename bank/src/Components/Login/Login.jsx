import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import supabase from "../../supabase";
import { UserData } from "../Context/UserProvider";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { User, setUser } = useContext(UserData);
  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    setUser(data.user.id);
  };

  return (
    <>
      {!User ? (
        <div className="">
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>SIGNIN</button>
        </div>
      ) : (
        <Navigate to="/Payment" />
        
      )}
    </>
  );
}

export default Login;
