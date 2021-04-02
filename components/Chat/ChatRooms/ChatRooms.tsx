import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { readMessage } from "../../../utils/context/actions/chatAction";
import * as S from "./styles";
import {
  useChatDispatch,
  useChatState,
} from "../../../utils/context/chatProvider";
import { getRoomList } from "../../../utils/context/actions/chatAction";
import Loading from "../../Public/Loading/Loading";
interface RoomData {
  id: number;
  image: string;
  index: 0;
  lastdate: Date;
  lastmessage: string;
  name: string;
  roomid: number;
  isread: boolean;
}
function date(params: Date) {
  let date = new Date(params);
  let diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return `${date.getFullYear()}년 ${date.getDay()}월 ${date.getDate()}일`;
  return (
    (day_diff == 0 &&
      ((diff < 60 && "방금") ||
        (diff < 120 && "1분 전") ||
        (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
        (diff < 7200 && "1시간 전") ||
        (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
    (day_diff == 1 && "어제") ||
    (day_diff < 7 && day_diff + "일 전") ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
  );
}

function ChatRooms({ club_id }: { club_id: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useChatDispatch();
  const state = useChatState();
  const [data, setData] = useState<any>(null);
  const [isOn, setIsOn] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const { query } = router;
  const rooms = useRef<any>([]);
  useEffect(() => {
    getRoomList(dispatch, undefined);
  }, [club_id]);

  useEffect(() => {
    setLoading(state.RoomList.loading);
    setData(state.RoomList.data);
    if (state.RoomList.data && !isOn) {
      if (!query.chat_id) return;
      const clubId: number = Number(query.chat_id);
      readMessage(dispatch, clubId);
      setIsOn(true);
    }
  }, [state]);

  const read = (room_id: number) => {
    readMessage(dispatch, room_id);
  };

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (rooms.current.length === 0) return;
    let tempRooms: any = rooms.current.rooms;
    for (let i = 0; i < event.target.value.length; i++) {
      tempRooms = [
        ...tempRooms.filter(
          (room: any) => room.name.indexOf(event.target.value[i]) !== -1
        ),
      ];
    }
    if (tempRooms.length === 0 && event.target.value === "") {
      tempRooms = rooms.current.rooms;
    }
    setData({
      club_section: rooms.current.club_section,
      rooms: tempRooms,
    });
  };
  return (
    <S.Wrapper>
      {loading && <Loading />}
      <S.SearchWrapper>
        <S.SearchIco></S.SearchIco>
        <input
          placeholder="검색"
          value={search}
          onChange={searchChange}
        ></input>
      </S.SearchWrapper>
      <S.RoomListWrapper>
        <div>
          <h3>클라이언트 채팅</h3>
          <S.MenuIco></S.MenuIco>
        </div>
        <S.RoomList>
          {data &&
            data.rooms.map((i: RoomData) => (
              <li
                key={i.roomid}
                onClick={() => read(i.roomid)}
                style={
                  Number(query.chat_id) == i.roomid
                    ? {
                        background: "#F5F5F5",
                        fontWeight: "bold",
                        display: "flex",
                        padding: "0 10px",
                        cursor: "pointer",
                      }
                    : {
                        background: "white",
                        display: "flex",
                        padding: "0 10px",
                        cursor: "pointer",
                      }
                }
              >
                <Link
                  href={{
                    pathname: `/chat/${club_id}/${i.roomid}`,
                  }}
                >
                  <a
                    style={{
                      width: "100%",
                    }}
                  >
                    <img
                      height="45px"
                      width="45px"
                      style={{ marginRight: "10px" }}
                      src={i.image}
                      alt="프로필"
                    ></img>
                    <div>
                      <p>{i.name}</p>
                      <S.LastMessage
                        style={
                          i.isread
                            ? { color: "#a4a4a4" }
                            : {
                                color: "#222222",
                                fontWeight: 900,
                                textShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
                              }
                        }
                      >
                        <p>{i.lastmessage}</p> · {date(i.lastdate)}
                      </S.LastMessage>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
        </S.RoomList>
      </S.RoomListWrapper>
    </S.Wrapper>
  );
}
export default ChatRooms;
