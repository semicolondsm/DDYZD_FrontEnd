import Header from "../components/Public/Header/Header";
import Main from "../components/Main";
import { useEffect } from "react";
import channel from "../utils/channel"
const Index = () => {
  useEffect(()=>{
    console.log("test");
    try {
      channel("a74d213c-6d20-4295-bf99-cbfde9ca2fe9");
    } catch(e){
      console.log(e);
    }
    return ()=> {
      let w: any=window;
      w.ChannelIO=null;
      w.ChannelIOInitialized=null;
      document.getElementById("ch-plugin")?.remove();
    }; 
  },[])
  return (
    <>
      <Header color="white"></Header>
      <Main></Main>
    </>
  );
};

export default Index;
