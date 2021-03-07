import { useRouter } from "next/router";
import Header from "../Public/Header/Header";
import ClubPreview from "./ClubPreview/ClubPreview";
function ClubManagement(){
    const router = useRouter()
    let id :number = +router.query.id
    return(
        <>
            
            {
                id ? 
                <>
                    <Header color="white"></Header>
                    <ClubPreview club_id={id}></ClubPreview>
                </>
                : null
            }
        </>
    )
}
export default ClubManagement;