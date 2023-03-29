import React, { useEffect, useState } from "react";
import supabase from "../../supabase";

function Loading() {
  const [Status, setStatus] = useState(null);

  supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Users" },
      (payload) => {
        // console.log("Change received!", payload);
        setStatus(payload?.new?.Status);
        // console.log(payload?.new?.Status);
      }
    )
    .subscribe();

  return (
    <div className="">
      {Status === null
        ? "Loading"
        : Status === true
        ? "payment success"
        : "payment failed"}
    </div>
  );
}

export default Loading;
