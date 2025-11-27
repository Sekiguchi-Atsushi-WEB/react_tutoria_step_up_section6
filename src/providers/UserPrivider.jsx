import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUerInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUerInfo }}>
      {children}
    </UserContext.Provider>
  );
};
