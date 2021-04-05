import ClubManagement from "@/src/components/ClubView/ClubView";
import { GetServerSidePropsContext } from "next";
export function getServerSideProps(context : GetServerSidePropsContext) {
    return {
        props: {clubid: context.query.clubid}
    };
}


function club({clubid} : {clubid : number}){
    return(
        <ClubManagement club_id={clubid}></ClubManagement>
    )
}
export default club;