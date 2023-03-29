import { createContext, useState, useEffect } from "react";
import supabase from "../../supabase";

export const UserData = createContext();

function UserProvider ({ children })  {
  const [User, setUser] = useState(null);
  // const [Id, setId] = useState(null);
  const handleSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    setUser(data.session.user.id);
    // console.log(data, error);
  };
  useEffect(() => {
    handleSession();
  }, []);

  return (
    <UserData.Provider value={{ User, setUser }}>
      {children}
    </UserData.Provider>
  );
}

export default UserProvider;