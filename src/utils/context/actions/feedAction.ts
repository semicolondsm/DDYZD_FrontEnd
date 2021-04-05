import club from "../../api/club";
import { GET_FEED_LIST, GET_FEED_LIST_ERROR, GET_FEED_LIST_SUCCESS, PUSH_FEED_LIST, A_PUSH_FEED_LIST, POP_FEED_LIST } from "../types"
export async function getFeed(dispatch: any, club_id : number, page : number) {
    dispatch({type : GET_FEED_LIST})
    try {
        let { data } = await club.getFeed(club_id, page)
        dispatch({type : GET_FEED_LIST_SUCCESS ,data : data})
    }
    catch (err){
        dispatch({type : GET_FEED_LIST_ERROR, error: err})
    }    
}
export async function pushFeed(dispatch: any, club_id : number, page : number) {
    try {
        let { data } = await club.getFeed(club_id, page)
        dispatch({type : PUSH_FEED_LIST ,data : data})
        return data;
    }
    catch (err){
        dispatch({type : GET_FEED_LIST_ERROR, error: err})
    }    
}

export async function pushAFeed(dispatch: any, feed_id : number) {
    try {
        let { data } = await club.getAFeed(feed_id)
        let temp=[];
        temp.push(data);
        dispatch({type : A_PUSH_FEED_LIST ,data : temp})
    }
    catch (err){
        dispatch({type : GET_FEED_LIST_ERROR, error: err})
    }   
}
export async function popFeed(dispatch: any, feed_id : number) {
    try {
        dispatch({type : POP_FEED_LIST, data : feed_id})
    }
    catch (err){
        dispatch({type : GET_FEED_LIST_ERROR, error: err})
    }   
}
