import React from "react";

export const UserContext = React.createContext();

export function UserProvider(props) {
  const [users, addUsers] = React.useState({
    //   username: "",
    //   email: ""
  });
  return <UserContext.Provider value={[users, addUsers]}>{props.children}</UserContext.Provider>;
}
