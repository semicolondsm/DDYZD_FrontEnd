import club from "@/utils/api/club";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Background } from "../Main/LoginSlide/styles";
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