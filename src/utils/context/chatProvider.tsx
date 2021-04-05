import { createContext, useReducer, useContext } from "react";
import chatReducer from "./reducers/chatReducer";
import { ChatAllType } from "../../interfaces/chat";

const initialState: ChatAllType = {
  RoomList: {
    error: false,
    data: null,
    loading: false,
  },
  ChatList: {
    error: false,
    data: null,
    loading: false,
  },
  ApplicantList: {
    error: false,
    data: null,
    loading: false,
  },
};

const ChatStateContext = createContext(null);
const ChatDispatchContext = createContext(null);

export function ChatProvider({ children }: any) {
  const [state, dispatch]: [any, any] = useReducer(chatReducer, initialState);
  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
}

export function useChatState() {
  const state: any = useContext(ChatStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useChatDispatch() {
  const dispatch = useContext(ChatDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
