import React, { useState, useContext } from "react";
import supabase from "../../supabase";
import { UserContext } from "../Context/userDetail";

function Signup() {
  const { Email, setEmail, Password, setPassword } = useContext(UserContext);
  
  const handleSignup = async (e) => {
    e.preventDefault();

    let { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
    });
    if(error){
      alert(error.message)
    }
    else{
      alert("Signup Successful")
    }
  };
  return (
    <section>
      <input
        type="Email"
        placeholder="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="Password"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </section>
  );
}

export default Signup;
