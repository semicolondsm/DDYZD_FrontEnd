import {
  GET_APPLICANT_LIST,
  GET_APPLICANT_LIST_SUCCESS,
  GET_APPLICANT_LIST_ERROR,
  GET_CHAT_LIST,
  GET_CHAT_LIST_SUCCESS,
  GET_CHAT_LIST_ERROR,
  GET_ROOM_LIST,
  GET_ROOM_LIST_SUCCESS,
  GET_ROOM_LIST_ERROR,
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR,
  PUSH_MESSAGE,
  REFRESH_LAST_MESSAGE,
  READ_MESSAGE,
  CHANGE_STATUS,
} from "../types";

const loadingState = {
  loading: true,
  data: null,
  error: false,
};

const success = <DataType>(data: DataType) => ({
  loading: false,
  data,
  error: false,
});

const error = (error: Error) => ({
  loading: false,
  data: null,
  error: error,
});

export default function (state: any, action: any) {
  switch (action.type) {
    case GET_APPLICANT_LIST:
      return { ...state, ApplicantList: loadingState };
    case GET_APPLICANT_LIST_SUCCESS:
      return { ...state, ApplicantList: success(action.data) };
    case GET_APPLICANT_LIST_ERROR:
      return { ...state, ApplicantList: error(action.error) };
    case GET_CHAT_LIST:
      if (state.ChatList.data !== null) {
        return {
          ...state,
          ChatList: {
            ...state.ChatList,
            loading: true,
          },
        };
      } else {
        return { ...state, ChatList: loadingState };
      }
    case GET_CHAT_LIST_SUCCESS:
      const data: any = {
        chat_id: action.data.chat_id,
        Chattings: action.data.chattings,
      };
      let temp = state.ChatList.data !== null ? [...state.ChatList.data] : [];
      const index = temp.findIndex(
        (val: any) => val.chat_id == action.data.chat_id
      );
      if (index === -1) {
        temp = [...temp, data];
      } else {
        temp[index].Chattings = action.data.chattings;
      }
      return {
        ...state,
        ChatList: { data: [...temp], loading: false, error: false },
      };
    case GET_CHAT_LIST_ERROR:
      return { ...state, ChatList: error(action.error) };
    case GET_ROOM_LIST:
      return { ...state, RoomList: loadingState };
    case GET_ROOM_LIST_SUCCESS:
      return { ...state, RoomList: success(action.data) };
    case GET_ROOM_LIST_ERROR:
      return { ...state, RoomList: error(action.error) };
    case GET_USER_INFO:
      if (state.ChatList.data !== null) {
        return {
          ...state,
          ChatList: {
            ...state.ChatList,
            loading: true,
          },
        };
      } else {
        return { ...state, ChatList: loadingState };
      }
    case GET_USER_INFO_SUCCESS:
      const data2: any = {
        chat_id: action.data.chat_id,
        user_info: action.data.user_info,
      };
      let temp2 = state.ChatList.data !== null ? [...state.ChatList.data] : [];
      const index2 = temp2.findIndex(
        (val: any) => val.chat_id == data2.chat_id
      );
      if (index2 === -1) {
        temp2.push(data2);
      } else {
        temp2[index2].user_info = action.data.user_info;
      }
      return {
        ...state,
        ChatList: { data: [...temp2], loading: false, error: false },
      };
    case GET_USER_INFO_ERROR:
      return { ...state, ChatList: error(action.error) };
    case PUSH_MESSAGE:
      const tempM = state.ChatList.data;
      const Mindex = tempM.findIndex(
        (val: any) => val.chat_id == action.data.room_id
      );
      console.log(tempM, tempM[Mindex], Mindex);
      if (tempM[Mindex].Chattings !== undefined) {
        tempM[Mindex].Chattings.push(action.data.message);
      }
      return { ...state, ChatList: { ...state.ChatList, tempM } };
    case REFRESH_LAST_MESSAGE:
      if (state.RoomList.data === null) {
        return {
          ...state,
        };
      }
      const tempL = state.RoomList.data.rooms;
      const Lindex = tempL.findIndex(
        (val: any) => val.roomid == action.data.room_id
      );
      if (Lindex === -1) {
        tempL.push(action.data.refresh);
        return {
          ...state,
          RoomList: {
            data: {
              ...state.RoomList.data,
              rooms: tempL,
            },
            loading: false,
            error: false,
          },
        };
      }
      tempL[Lindex].lastmessage = action.data.message.message;
      tempL[Lindex].lastdate = action.data.message.date;
      tempL[Lindex].isread = action.data.message.isread;
      return {
        ...state,
        RoomList: {
          data: {
            ...state.RoomList.data,
            rooms: tempL,
          },
          loading: false,
          error: false,
        },
      };
    case READ_MESSAGE:
      const tempR = state.RoomList.data.rooms;
      const Rindex = tempR.findIndex((val: any) => val.roomid == action.data);
      if (Rindex === -1) return { ...state };
      tempR[Rindex].isread = true;
      return {
        ...state,
        RoomList: {
          data: {
            ...state.RoomList.data,
            rooms: tempR,
          },
          loading: false,
          error: false,
        },
      };
    case CHANGE_STATUS:
      const tempS = state.RoomList.data.rooms;
      const Sindex = tempS.findIndex(
        (val: any) => val.roomid == action.data.room_id
      );
      if (Sindex === -1) return { ...state };
      tempS[Sindex].status = action.data.status;
      return {
        ...state,
        RoomList: {
          data: {
            ...state.RoomList.data,
            rooms: tempS,
          },
          loading: false,
          error: false,
        },
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
