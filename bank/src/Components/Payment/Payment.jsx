import React, { useContext } from "react";
import { UserData } from "../Context/UserProvider";
import supabase from "../../supabase";
function Payment() {
  const { User } = useContext(UserData);

  const handlePay = async (e) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from("Users")
      .update({ Status: "TRUE" })
      .eq("UserID", User);
    
    {!error?console.log("success"):console.log(error)}
  };
  const handleCancle = async(e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("Users")
      .update({ Status: "FALSE" })
      .eq("UserID", User);
    
    {!error?console.log("Cancle"):console.log(error)}
  };

  return (
    <div className="">
      <button onClick={handlePay}>Pay</button>
      <button onClick={handleCancle}>Cancle</button>
    </div>
  );
}

export default Payment;
