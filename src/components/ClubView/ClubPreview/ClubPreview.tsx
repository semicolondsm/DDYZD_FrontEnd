import { useEffect, useState } from "react";
import club from '@/src/utils/api/club';
import ClubFeed from "./ClubFeed/ClubFeed";
import ClubHeader from "./ClubHeader/ClubHeader";
import ClubRecruitment from "./ClubRecruitment/ClubRecruitment";
import ClubUtil from "./ClubUtil/ClubUtil";
import ClubMember from "./ClubMember/ClubMember";

function ClubPreview({club_id} : {club_id : number}){
    const [ clubData, setClubData ] = useState<any>()
    useEffect(()=>{
        club.getInfo(club_id)
       .then((res)=>{
        setClubData(res.data);
       })
    },[])

    return(
        <>
        {
            clubData ? 
            <>
                <div style={{backgroundColor: "#ffffff"}}>
                    <ClubHeader data={clubData}></ClubHeader>
                    <ClubUtil data={clubData}></ClubUtil>
                </div>
                <ClubMember club_id={club_id}/>
                <ClubRecruitment club_id={club_id}></ClubRecruitment>
                <ClubFeed club_id={club_id}></ClubFeed>
            </>
            : null
        }
        </>
    )
}
export default ClubPreview;