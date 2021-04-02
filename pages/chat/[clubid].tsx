import { GetServerSidePropsContext } from "next";
import Chat from "../../components/Chat/Chat";
import { ChatProvider } from "../../utils/context/chatProvider";

export function getServerSideProps(context : GetServerSidePropsContext) {
    return {
        props: {params: context.params}
    };
}
interface Props{
    clubid : number;
}
const chat = ({params} : {params : Props}) => {
    const { clubid } = params;
    return (
        <ChatProvider>
            <Chat club_id={clubid}/>
        </ChatProvider>
    );
};

export default chat;
