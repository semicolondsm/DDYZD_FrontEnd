
import Chat from "@/components/Chat/Chat";
import { ChatProvider } from "@/utils/context/chatProvider";
import { GetServerSidePropsContext } from "next";

export function getServerSideProps(context : GetServerSidePropsContext) {
    return {
        props: {params: context.params}
    };
}
interface Props{
    clubid : number;
    chatid : number;
}
const chat = ({params} : {params : Props}) => {
    const { clubid,chatid } = params;
    return (
        <ChatProvider>
            <Chat club_id={clubid} chat_id={chatid}/>
        </ChatProvider>
    );
};

export default chat;