import ClubFeed from "./ClubFeed/ClubFeed";
import ClubHeader from "./ClubHeader/ClubHeader";
import ClubRecruitment from "./ClubRecruitment/ClubRecruitment";
import ClubUtil from "./ClubUtil/ClubUtil";

function ClubPreview({club_id} : {club_id : number}){
    return(
        <>
            <ClubHeader club_id={club_id}></ClubHeader>
            <ClubUtil club_id={club_id}></ClubUtil>
            <ClubRecruitment club_id={club_id}></ClubRecruitment>
            <ClubFeed club_id={club_id}></ClubFeed>
        </>
    )
}
export default ClubPreview;