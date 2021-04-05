import ClubManagement from "@/components/ClubView/ClubView";
import { GetServerSidePropsContext } from "next";
export function getServerSideProps(context : GetServerSidePropsContext) {
    return {
        props: {params: context.params}
    };
}

interface Props{
    clubid : number;
}
function club({params} : {params : Props}){
    const { clubid } = params;
    return(
        <ClubManagement club_id={clubid}></ClubManagement>
    )
}
export default club;