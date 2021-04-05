import Header from "../Public/Header/Header";
import ClubPreview from "./ClubPreview/ClubPreview";
function ClubManagement({ club_id } : { club_id : number}){
    return(
        <>
            
            {
                club_id ? 
                <>
                    <Header color="white"></Header>
                    <ClubPreview club_id={club_id}></ClubPreview>
                </>
                : null
            }
        </>
    )
}
export default ClubManagement;