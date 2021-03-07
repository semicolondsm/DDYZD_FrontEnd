import { createContext, useReducer, useContext } from "react";
import { RecruitmentType } from "../../components/interfaces/recruitment";
import recruitmentReducer from "./reducers/recruitmentReducer";

const initialState: RecruitmentType = {
  Recruitment: {
    error: false,
    data: null,
    loading: false,
  },
};

const RecruitmentStateContext = createContext(null);
const RecruitmentDispatchContext = createContext(null);

export function RecruitmentProvider({ children }: any) {
  const [state, dispatch]: [any, any] = useReducer(recruitmentReducer, initialState);
  return (
    <RecruitmentStateContext.Provider value={state}>
      <RecruitmentDispatchContext.Provider value={dispatch}>
        {children}
      </RecruitmentDispatchContext.Provider>
    </RecruitmentStateContext.Provider>
  );
}

export function useRecruitmentState() {
  const state = useContext(RecruitmentStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useRecruitmentDispatch() {
  const dispatch = useContext(RecruitmentDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
