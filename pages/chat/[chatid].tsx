import Chat from "@/src/components/Chat/Chat";
import { ChatProvider } from "@/src/utils/context/chatProvider";
import { GetServerSidePropsContext } from "next";
export function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: { chat_id: context.query.chatid },
    };
}

const chat = ({ chat_id }: { chat_id: number }) => {
    return (
        <ChatProvider>
            <Chat chat_id={chat_id} />
        </ChatProvider>
    );
};

export default chat;
