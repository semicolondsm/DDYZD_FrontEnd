import { FormEvent, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import useChat from "../../../utils/hooks/useChat";
import { ChatData } from "../../../interfaces";
import ChatComponents from "./ChatComponets/ChatComponents";
import {
    useChatDispatch,
    useChatState,
} from "../../../utils/context/chatProvider";
import {
    getChatList,
    getUserInfo,
} from "../../../utils/context/actions/chatAction";
import Loading from "../../Public/Loading/Loading";
import clubApi from "../../../utils/api/club";

function ChatBreakDown({
    roomToken,
    chatId,
    Socket,
}: {
    roomToken: string;
    chatId: number;
    Socket: any;
}) {
    const [value, setValue] = useState<string>("");
    const { sendMessage } = useChat(chatId, roomToken, Socket);
    const [data, setData] = useState<ChatData[]>([]);
    const [info, setInfo] = useState<any>();
    const [modal, setModal] = useState<"R" | "N" | "J" | "A" | null>(null);
    const [select, setSelect] = useState<string>("am");
    const [loading, setLoading] = useState<boolean>(false);
    const [location, setLocation] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("0");
    const [startDate, setStartDate] = useState<string>(
        localStorage.date && localStorage.date
    );
    const [category, setCategory] = useState<any[]>([]);
    const [chatStatus, setChatStatus] = useState<string>("");
    const [startMinute, setStartMinute] = useState<string>("0");
    const [fix, setFix] = useState<boolean>(localStorage.date ? true : false);
    const messagesEndRef = useRef<any>(null);
    const dispatch = useChatDispatch();
    const state = useChatState();

    const selectRef: any = useRef(null);
    useEffect(() => {
        if (state.ChatList.data !== null) {
            const index = state.ChatList.data.findIndex(
                (val: any) => val.chat_id == chatId
            );
            if (index !== -1) {
                messagesEndRef.current.scrollTop =
                    messagesEndRef.current.scrollHeight;
                setData(state.ChatList.data[index].Chattings);
                setInfo(state.ChatList.data[index].user_info);
                messagesEndRef.current.scrollTop =
                    messagesEndRef.current.scrollHeight;
                return;
            }
        }
        getChatList(dispatch, chatId);
        getUserInfo(dispatch, chatId);
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }, [chatId]);

    useEffect(() => {
        setLoading(state.ChatList.loading);
        let temp: any[] = [];
        let temp2: any = {};
        if (state.ChatList.data === null || state.RoomList.data === null)
            return;
        state.ChatList.data.forEach((val: any) => {
            if (chatId === val.chat_id) {
                temp = val.Chattings;
                temp2 = val.user_info;
            }
            setData(temp);
            setInfo(temp2);
        });
        state.RoomList.data.rooms.forEach((val: any) => {
            if (chatId == val.roomid) {
                setChatStatus(val.status);
                temp = val.status;
                clubApi
                    .getRecruitment(val.id)
                    .then((res) => setCategory(res.data.major))
                    .catch((err) => console.log(err));
            }
        });
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }, [state]);
    useEffect(() => {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }, [data]);
    const jiwon = () => {
        if (selectRef === null) return;
        sendMessage({ type: "J", major: selectRef.current.value });
        setModal(null);
    };
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (value !== "") sendMessage({ msg: value });
        setValue("");
    }
    function ScheduleSubmit() {
        setModal(null);
        let hours =
            select === "pm"
                ? startTime === "12"
                    ? 0
                    : parseInt(startTime) + 12
                : startTime;
        const date = new Date(
            `${startDate.replace("-", "/")} ${hours}:${startMinute}`
        );
        let result = window.confirm(
            `${
                date.getMonth() + 1
            }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 (으)로 확정하시겠습니까?`
        );
        result &&
            sendMessage({
                type: "N",
                date: `${date.getMonth() + 1}월 ${date.getDate()}일 ${
                    select === "pm" ? "오후" : "오전"
                } ${startTime}시 ${date.getMinutes()}분`,
                location: location,
            });
        if (fix) localStorage.setItem("date", startDate);
        else localStorage.removeItem("date");
    }
    const answerDong = () => {
        const result = window.confirm("동아리를 최종확정을 하시겠습니까?");
        sendMessage({ type: "R", answer: result });
    };
    function InterviewSubmit(state: boolean) {
        let result = window.confirm(
            `면접결과를 정말로 ( ${
                state ? "합격" : "실패"
            } ) (으)로 확정하시겠습니까?`
        );
        if (result) {
            state
                ? sendMessage({ type: "R", result: true })
                : sendMessage({ type: "R", result: false });
        }
        setModal(null);
    }
    function hourHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let { value, min, max } = e.target;
        setStartTime(
            String(Math.max(Number(min), Math.min(Number(max), Number(value))))
        );
    }
    function minuteHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let { value, min, max } = e.target;
        setStartMinute(
            String(Math.max(Number(min), Math.min(Number(max), Number(value))))
        );
    }
    return (
        <S.Wrapper>
            {loading && <Loading />}
            <S.Header>
                <div>
                    <img src={info?.image}></img>
                    <h3>{info?.name}</h3>
                </div>
            </S.Header>
            <S.ChatList ref={messagesEndRef}>
                {data?.map((i, index) => (
                    <li key={index}>
                        <ChatComponents info={info} data={i}></ChatComponents>
                    </li>
                ))}
            </S.ChatList>
            <S.Bottom onSubmit={onSubmit}>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="메세지 입력"
                    style={{ color: "black" }}
                ></input>
                {chatStatus === "C" && category.length !== 0 ? (
                    <></>
                ) : chatStatus === "N" ? (
                    <S.JiButton
                        onClick={() => {
                            modal ? setModal(null) : setModal("J");
                        }}
                    >
                        지원하기
                    </S.JiButton>
                ) : chatStatus === "R" ? (
                    <S.JiButton
                        onClick={() => {
                            modal ? setModal(null) : setModal("A");
                            answerDong();
                        }}
                    >
                        동아리 확정하기
                    </S.JiButton>
                ) : (
                    <></>
                )}
                {modal === "A" ? (
                    <></>
                ) : modal === "J" ? (
                    <S.JiModal>
                        <S.Select ref={selectRef}>
                            {category.map((val) => (
                                <option value={val}>{val}</option>
                            ))}
                        </S.Select>
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <S.CeButton onClick={jiwon}>지원하기</S.CeButton>
                            <S.CeButton
                                onClick={() =>
                                    modal ? setModal(null) : setModal("R")
                                }
                                style={{ marginLeft: "10px" }}
                            >
                                취소
                            </S.CeButton>
                        </div>
                    </S.JiModal>
                ) : modal === "R" ? (
                    <S.InterviewDropDownMenu>
                        <h3>면접결과</h3>
                        <S.InterviewDropDownWrapper>
                            <img src={info?.image}></img>
                            {info?.name}
                            <S.ConfirmIco
                                onClick={() => InterviewSubmit(true)}
                            ></S.ConfirmIco>
                            <S.RefuseIco
                                onClick={() => InterviewSubmit(false)}
                            ></S.RefuseIco>
                        </S.InterviewDropDownWrapper>
                    </S.InterviewDropDownMenu>
                ) : modal === "N" ? (
                    <S.InterviewScheduleMenu>
                        <h3>면접일정</h3>
                        <S.InterviewScheduleWrapper>
                            <input
                                onChange={(e) => setLocation(e.target.value)}
                                value={location}
                                placeholder="면접장소"
                            ></input>
                            <input
                                onChange={(e) => setStartDate(e.target.value)}
                                value={startDate}
                                type="date"
                            ></input>
                            <label>
                                <p>날짜 고정</p>
                                <input
                                    onChange={(e) => setFix(e.target.checked)}
                                    checked={fix}
                                    type="checkbox"
                                />
                            </label>
                            <div>
                                <select
                                    onChange={(e) => setSelect(e.target.value)}
                                    value={select}
                                >
                                    <option value="am">오전</option>
                                    <option value="pm">오후</option>
                                </select>
                                <input
                                    max="12"
                                    min="0"
                                    onChange={hourHandler}
                                    value={startTime}
                                />
                                시
                                <input
                                    max="59"
                                    min="0"
                                    onChange={minuteHandler}
                                    value={startMinute}
                                />
                                분
                                <button onClick={ScheduleSubmit}>
                                    <S.DateConfirmIco />
                                </button>
                            </div>
                        </S.InterviewScheduleWrapper>
                    </S.InterviewScheduleMenu>
                ) : null}
            </S.Bottom>
        </S.Wrapper>
    );
}
export default ChatBreakDown;
