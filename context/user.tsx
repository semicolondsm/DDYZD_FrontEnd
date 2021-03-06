import React, { createContext, useState } from "react";
interface Clubs{
    club_id : number,
    club_name : string,
}

interface UserData {
    clubs : Clubs[],
    email : string,
    gcn : string,
    github_url : string,
    image_path : string,
    name : string,
    user_id : number,
}

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
      user_state: null,
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



