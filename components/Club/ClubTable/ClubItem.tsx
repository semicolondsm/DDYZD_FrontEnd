import * as S from "./styles"
import CheckItem from "./CheckItem"
import { ClubItemData } from "../../../interfaces"
function ClubItem({ props }:{props:ClubItemData}){
    return(
        <S.TableItem>
            <S.ItemState>{(props.status === 2)?"배송중" : "배송완료"}<S.ButtonWrapper><CheckItem></CheckItem></S.ButtonWrapper></S.ItemState>
            <S.ItemElement>
                <S.ItemName>{props.name}</S.ItemName>
                <S.ItemOption>{props.option}</S.ItemOption>
                <S.ItemAddress 
                    style={{cursor:"pointer"}}
                    onClick={()=>{
                        window.open(props.link)
                    }}
                >{props.link}</S.ItemAddress>
            </S.ItemElement>
            <td>{props.count}개</td>
            <td>{props.price}원</td>
            <td>{props.delivery_status}</td>
        </S.TableItem>
    )
}
export default ClubItem