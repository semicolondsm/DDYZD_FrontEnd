import Chat from "../components/Chat/Chat";
import { ChatProvider } from "../utils/context/chatProvider";

const chat = () => {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
};

export default chat;
