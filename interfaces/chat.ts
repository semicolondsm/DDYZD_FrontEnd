import { ChatData } from "./index";

interface RoomType {
  roomid: number;
  id: string;
  name: string;
  image: string;
  lastdate: Date | null;
  lastmessage: string | null;
  isread: boolean;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
  index: number;
}

export interface RoomList {
  club_section: string[] | string;
  rooms: RoomType[];
}

interface UserInfo {
  id: number;
  name: string;
  image: string;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
}

export interface Chattings {
  room_id: number;
  Chattings: ChatData[];
  user_info: UserInfo;
}

export interface ApplicantType {
  roomid: number;
  name: string;
  image: string;
  lastdate: Date;
  lastmessage: string;
  isread: boolean;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
  index: number;
}

interface stateRoom {
  error: boolean;
  data: RoomList[] | null;
  loading: boolean;
}

interface stateChat {
  error: boolean;
  data: Chattings[] | null;
  loading: boolean;
}

interface stateApplicant {
  error: boolean;
  data: ApplicantType[] | null;
  loading: boolean;
}

export interface ChatAllType {
  RoomList: stateRoom;
  ChatList: stateChat;
  ApplicantList: stateApplicant;
}
