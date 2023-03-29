import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userDetail";
import supabase from "../../supabase";

function Cart() {
  const { User } = useContext(UserContext);

  const Navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Users")
      .insert([{ UserID: User }]);
    {
      !error && Navigate("/Loading");
    }
  };

  useEffect(() => {
    console.log(User);
    if (!User) {
      Navigate("/");
    }
  }, [User]);

  return (
    <div className="">
      <div className="">100</div>
      <button onClick={handleClick}>Pay</button>
    </div>
  );
}

export default Cart;
