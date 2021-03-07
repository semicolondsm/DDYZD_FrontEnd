import { useEffect, useState } from "react";
import { useChatDispatch } from "../../utils/context/chatProvider";
import {
  pushMessage,
  refreshLastMessage,
  getChatList,
  changeStatus,
  getRoomList,
} from "../context/actions/chatAction";
import chatApi from "../api/chat";
import { useRouter } from "next/router";

interface ChatData {
  created_at: Date;
  msg: string;
  title: string;
  user_type: "U" | "C" | "H1" | "H2" | "H3" | "H4";
}
interface messageType {
  message: string;
  date: Date;
}

const useChat = (roomId: number, roomToken: string, Socket: any) => {
  const [messages, setMessages] = useState<ChatData[]>([]);
  const router = useRouter();
  const dispatch = useChatDispatch();
  useEffect(() => {
    if (localStorage.getItem("connect") == "true") {
      Socket.emit("join_room", { room_token: roomToken });
      return;
    }
    Socket.on("connect", () => {
      Socket.emit("join_room", { room_token: roomToken });
      localStorage.setItem("connect", "true");
    });
  }, []);

  const sendMessage = (data: any) => {
    switch (data.type) {
      case "N":
        changeStatus(dispatch, { room_id: roomId, status: "N" });
        Socket.emit("helper_schedule", {
          room_token: roomToken,
          date: data.date,
          location: data.location,
        });
        break;
      case "R":
        console.log(123, data.answer, data);
        Socket.emit("helper_answer", {
          room_token: roomToken,
          answer: data.answer,
        });
        getRoomList(dispatch, Number(router.query.club_id));
        break;
      case "J":
        changeStatus(dispatch, { room_id: roomId, status: "J" });
        Socket.emit("helper_apply", {
          room_token: roomToken,
          major: data.major,
        });
        break;
      default:
        Socket.emit("send_chat", {
          room_token: roomToken,
          msg: data.msg,
        });
        break;
    }
  };

  return { messages, sendMessage };
};

export default useChat;
