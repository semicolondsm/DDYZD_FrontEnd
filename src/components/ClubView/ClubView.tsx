import Header from "../Public/Header/Header";
import ClubPreview from "./ClubPreview/ClubPreview";
function ClubManagement({ club_id } : { club_id : number}){
    return(
        <>
            <Header color="white"></Header>
            <ClubPreview club_id={club_id}></ClubPreview>
        </>
    )
}
export default ClubManagement;