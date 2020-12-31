import Header from '../../components/Public/Header/Header'
import ClubItemList from "../../components/Club/ClubItemList";
import ClubItemApply from '../../components/Club/ClubItemApply';
const Index = () => {
  return(
    <>
        <Header></Header>
        <div style={{display:"flex", marginTop:"1%", justifyContent:"space-between", padding:"0 16%"}}>
            <ClubItemList></ClubItemList>
            <ClubItemApply></ClubItemApply>
        </div>
    </>
  )
  
}

export default Index
