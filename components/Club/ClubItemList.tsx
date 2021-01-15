import axios from "axios";
import { useEffect, useState } from "react";
import { ClubItemTableData } from "../../interfaces";
import ClubItemTable from "./ClubItemTable"
import * as S from "./styles"

function ClubItemList(){
    const [Data,setData] = useState<ClubItemTableData[] | null>(null);
    return(
        <S.Container>
            {
                Data && Data.map((i)=>{
                    console.log(i);
                    return(<ClubItemTable props={i}></ClubItemTable>)
                })
            }
        </S.Container>
    )
}   
export default ClubItemList