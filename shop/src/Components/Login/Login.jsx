import React, { useState, useContext } from "react";
import supabase from "../../supabase";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../Context/userDetail";

function Login() {
  const { User, setUser, Email, setEmail, Password, setPassword } =
    useContext(UserContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    console.log(error);
    setUser(data.user.id);
  };

  return (
    <div className="">
      {!User ? (
        <section>
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>LOGIN</button>
          <Link to="/Signup">
            <button>Signup</button>
          </Link>
        </section>
      ) : (
        <Navigate to="/Cart" />
      )}
    </div>
  );
}

export default Login;
