import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "myName";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
