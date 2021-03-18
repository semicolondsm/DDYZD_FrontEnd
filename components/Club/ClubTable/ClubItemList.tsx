import { useEffect, useState } from "react";
import { ClubItemTableData } from "../../../interfaces";
import ClubItemTable from "./ClubItemTable"
import * as S from "./styles"
import ClubItem from 'utils/api/clubItem'
import {getState} from '@/context/context'

function ClubItemList(){
    const state = getState();
    const [Data,setData] = useState<ClubItemTableData[] | null>(null);
    useEffect(()=>{
        ClubItem.getItemList(19)
        .then((e : any)=>{
            console.log(e)
            setData([
                {
                    user_name: "안은결",
                    data: e.data
                }
            ])  
        })
    },[state.userIData])
    return(
        <S.Container>
            {
                Data?.map((i,index)=>{
                    console.log(i);
                    return(<ClubItemTable key={index} props={i}></ClubItemTable>)
                })
            }
        </S.Container>
    )
}   
export default ClubItemList