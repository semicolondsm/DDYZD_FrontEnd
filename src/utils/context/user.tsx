import React, { createContext, useState } from "react";
const UserContext = createContext<any>({
  user_state: "",
  setUserState: () => {}
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  function setUserState(state: any){
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



