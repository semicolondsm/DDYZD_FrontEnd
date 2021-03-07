import {
  SET_RECRUITMENT,
  DEL_RECRUITMENT,
  SET_RECRUITMENT_SUCCESS,
  SET_RECRUITMENT_ERROR,
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
    case SET_RECRUITMENT:
      return { ...state, Recruitment: loadingState };
    case SET_RECRUITMENT_SUCCESS:
      return { ...state, Recruitment: success(action.data) };
    case SET_RECRUITMENT_ERROR:
      return { ...state, Recruitment: error(action.error) };
    case DEL_RECRUITMENT:
      return { ...state, Recruitment: null };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
