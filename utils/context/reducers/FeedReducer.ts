import {
  GET_FEED_LIST,
  GET_FEED_LIST_SUCCESS,
  GET_FEED_LIST_ERROR,
  PUSH_FEED_LIST,
  A_PUSH_FEED_LIST,
  POP_FEED_LIST,
} from "../types";

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
    case GET_FEED_LIST:
      return { ...state, FeedList: loadingState };
    case GET_FEED_LIST_SUCCESS:
      return { ...state, FeedList: success(action.data) };
    case GET_FEED_LIST_ERROR:
      return { ...state, FeedList: error(action.error) };
    case POP_FEED_LIST:
      let index=state.FeedList.data.findIndex((element : any) => element.feedId===action.data);
      state.FeedList.data.splice(index,1)
      return { ...state};
    case PUSH_FEED_LIST:
      return {
        ...state,
        FeedList: {...state.FeedList, data : [...state.FeedList.data, ...action.data] },
      };
    case A_PUSH_FEED_LIST:
      return {
        ...state,
        FeedList: {...state.FeedList, data : [...action.data, ...state.FeedList.data] },
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
