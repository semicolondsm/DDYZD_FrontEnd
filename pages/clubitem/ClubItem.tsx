import ClubItemList from "../../components/Club/ClubItemList";
import ItemApply from './ItemApply'

function ClubItem() {
    return(
        <div style={{display:"flex", marginTop:"1%", justifyContent:"space-between", padding:"0 16%"}}>
            <ClubItemList></ClubItemList>
            <ItemApply></ItemApply>
        </div>
    )
}
export default ClubItem;