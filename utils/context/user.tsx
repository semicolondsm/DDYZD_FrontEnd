import React, { createContext, useState } from "react";
import UserData from "../../components/interfaces/user";

const UserContext = createContext<any>({
  user_state: "",
  setUserState: () => {}
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  function setUserState(state: UserData){
    setUser((prevState: any) => {
        return {
          ...prevState,
          user_state: state
        };  
      });
  }
  const init : any = {
      user_state: localStorage.userCache && JSON.parse(localStorage.userCache),
      setUserState,
  };
  const [user, setUser] = useState(init);
  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

const { Consumer: UserConsumer } = UserContext;

export { UserConsumer, UserProvider };

export default UserContext;



