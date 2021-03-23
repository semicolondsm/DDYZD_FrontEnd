import Header from "../components/Public/Header/Header";
import Main from "../components/Main";
import { useEffect } from "react";
import channel from "../utils/channel"
const Index = () => {
  useEffect(()=>{
    channel("a74d213c-6d20-4295-bf99-cbfde9ca2fe9");
  },[])
  return (
    <>
      <Header color="white"></Header>
      <Main></Main>
    </>
  );
};

export default Index;
