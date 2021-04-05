import club from "../../api/club";
import {
    DEL_RECRUITMENT,
    SET_RECRUITMENT_SUCCESS,
    SET_RECRUITMENT_ERROR,
  } from "../types";

export async function setRecruitment(dispatch: any, club_id : number) {
    try {
        let { data } = await club.getRecruitment(club_id)
        dispatch({type : SET_RECRUITMENT_SUCCESS ,data : data})
        return data;
    }
    catch (err){
        dispatch({type : SET_RECRUITMENT_ERROR, error: err})
    }    
}

export async function delRecruitment(dispatch: any, club_id : number) {
    try {
        dispatch({type : DEL_RECRUITMENT})
        await club.delRecruitment(club_id)
    }
    catch (err){
        dispatch({type : SET_RECRUITMENT_ERROR, error: err})
    }    
}
