import { useEffect, useState, useRef } from "react";
import chat from "@/utils/api/chat";
import Header from "../Public/Header/Header";
import ChatBreakDown from "./ChatBreakDown/ChatBreakDown";
import ChatRooms from "./ChatRooms/ChatRooms";
import socketIOClient from "socket.io-client";
import { useChatDispatch } from "@/utils/context/chatProvider";
import {
    pushMessage,
    refreshLastMessage,
    getChatList,
    changeStatus,
} from "@/utils/context/actions/chatAction";
import chatApi from "@/utils/api/chat";
import * as S from "./styles";
import { useRouter } from "next/router";
interface messageType {
    message: string;
    date: Date;
    isread: boolean;
}
const SOCKET_SERVER_URL = "https://api.semicolon.live/chat?token=";
function Chat({ chat_id }: { chat_id?: number }) {
    const [room_token, setRoomToken] = useState<string | null>(null);
    const [socket, setSocket] = useState<any>(null);
    const [isCon, setIsCon] = useState<boolean>(false);
    const dispatch = useChatDispatch();
    const router = useRouter();
    const chat_id123 = useRef<number | null>(null);

    useEffect(() => {
        window.Notification.requestPermission();
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on("recv_chat", (message: any) => {
                const room_id: number = chat_id ? chat_id : 0;
                if (room_id === null) return;
                if (
                    message.user_type === "H1" ||
                    message.user_type === "H2" ||
                    message.user_type === "H3" ||
                    message.user_type === "H4"
                ) {
                    switch (message.user_type) {
                        case "H1":
                            changeStatus(dispatch, { room_id, status: "A" });
                            break;
                        case "H2":
                            changeStatus(dispatch, { room_id, status: "S" });
                            break;
                        case "H3":
                            if (message.title.indexOf("불합격") === -1) {
                                changeStatus(dispatch, {
                                    room_id,
                                    status: "R",
                                });
                            } else {
                                changeStatus(dispatch, {
                                    room_id,
                                    status: "N",
                                });
                            }
                            break;
                        default:
                            break;
                    }
                }
                pushMessage(dispatch, message, room_id);
                const tempM: messageType = {
                    message: message.msg,
                    date: message.created_at || message.date,
                    isread: true,
                };
                refreshLastMessage(dispatch, tempM, room_id);

                if (sessionStorage.getItem("onf") == "false") {
                    chatApi
                        .getRefresh(room_id)
                        .then((response: any) => {
                            const notification: Notification = new Notification(
                                `${response.data.name}`,
                                {
                                    body: `${response.data.lastmessage}`,
                                    icon: "../../public/images/semicolon.png",
                                }
                            );
                            notification.onclick = () => {
                                return false;
                            };
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
            socket.on("alarm", async ({ room_id }: { room_id: number }) => {
                const response: any = await chatApi.getRefresh(room_id);
                const message: messageType = {
                    message: response.data.lastmessage,
                    date: response.data.lastdate,
                    isread: false,
                };
                getChatList(dispatch, room_id);
                if (room_id !== chat_id123.current) {
                    refreshLastMessage(
                        dispatch,
                        message,
                        room_id,
                        response.data
                    );
                    const notification: Notification = new Notification(
                        `${response.data.name}`,
                        {
                            body: `${response.data.lastmessage}`,
                            icon: "../../public/images/semicolon.png",
                        }
                    );
                    notification.onclick = () => {
                        return false;
                    };
                }
            });
            socket.on("error", (messages: any) => {
                if (messages.msg.indexOf("Club is not recru")) {
                    alert("지원할 수 없습니다!");
                }
            });
        }
    }, [socket]);

    useEffect(() => {
        chat_id123.current = Number(chat_id);
        if (socket && room_token) socket.emit("leave_room", { room_token });
        setRoomToken(null);
        chat_id &&
            chat.getToken(chat_id).then((res: any) => {
                setRoomToken(res.data.room_token);
            });
    }, [router]);

    useEffect(() => {
        window.onfocus = () => {
            sessionStorage.setItem("onf", "true");
        };
        window.onblur = () => {
            sessionStorage.setItem("onf", "false");
        };
        if (isCon) return;
        const Socket = socketIOClient.connect(
            SOCKET_SERVER_URL + localStorage.accessToken,
            { transports: ["websocket"] }
        );
        setSocket(Socket);
        Socket.on("connect", () => {
            setIsCon(true);
            localStorage.setItem("connect", "true");
        });

        return () => {
            Socket.disconnect();
        };
    }, []);
    return (
        <>
            <Header color="white"></Header>
            <S.Wrapper
                style={{ background: "white", borderTop: "1px solid #cccccc" }}
            >
                <ChatRooms chat_id={chat_id!}></ChatRooms>
                {room_token ? (
                    <ChatBreakDown
                        Socket={socket}
                        roomToken={room_token}
                        chatId={chat_id ? chat_id : 0}
                    ></ChatBreakDown>
                ) : null}
            </S.Wrapper>
        </>
    );
}
export default Chat;
