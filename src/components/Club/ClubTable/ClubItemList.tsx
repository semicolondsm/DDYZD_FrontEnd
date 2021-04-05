import { useEffect, useState } from "react";
import { ClubItemTableData } from "../../../interfaces";
import ClubItemTable from "./ClubItemTable"
import * as S from "./styles"

function ClubItemList(){
    const [Data,setData] = useState<ClubItemTableData[] | null>(null);
    useEffect(()=>{
        setData([
            {
                user_name: "안은결",
                data: [{
                    item_name : "test",
                    item_state : "test",
                    option : "test",
                    link : "test",
                    amount: "3",
                    price: 5000,
                    delivery_status: "test",
                }]
            }
        ])
    },[])
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