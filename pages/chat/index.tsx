import Chat from "@/src/components/Chat/Chat";
import { ChatProvider } from "@/src/utils/context/chatProvider";
const chat = () => {
    return (
        <ChatProvider>
            <Chat chat_id={undefined} />
        </ChatProvider>
    );
};

export default chat;
