import club from "@/utils/api/club"
import { GET_MENU_LIST, GET_MENU_LIST_ERROR, GET_MENU_LIST_SUCCESS} from "../types"
export async function getMenu(dispatch: any) {
    dispatch({type : GET_MENU_LIST})
    try {
        let { data } = await club.getClubList();
        dispatch({type : GET_MENU_LIST_SUCCESS ,data : data})
    }
    catch (err){
        dispatch({type : GET_MENU_LIST_ERROR, error: err})
    }    
}