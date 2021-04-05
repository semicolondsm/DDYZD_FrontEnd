import Chat from "@/components/Chat/Chat";
import { ChatProvider } from "@/utils/context/chatProvider";
const chat = () => {
    return (
        <ChatProvider>
            <Chat chat_id={undefined} />
        </ChatProvider>
    );
};

export default chat;
