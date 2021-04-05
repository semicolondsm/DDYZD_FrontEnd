import { GET_MENU_LIST, GET_MENU_LIST_ERROR, GET_MENU_LIST_SUCCESS } from "../types";

const loadingState = {
  loading: true,
  data: [],
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
    case GET_MENU_LIST :
      return { ...state, MenuList: loadingState };
    case GET_MENU_LIST_SUCCESS:
      return { ...state, MenuList: success(action.data) };
    case GET_MENU_LIST_ERROR:
      return { ...state, MenuList: error(action.error) };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}