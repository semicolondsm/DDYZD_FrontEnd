import * as S from "./styles"
import CheckItem from "./CheckItem"
import { ClubItemData } from "../../interfaces"
function ClubItem({ props }:{props:ClubItemData}){
    return(
        <S.TableItem>
            <S.ItemState>{props.item_state}<S.ButtonWrapper><CheckItem></CheckItem></S.ButtonWrapper></S.ItemState>
            <S.ItemElement>
                <S.ItemName>{props.item_name}</S.ItemName>
                <S.ItemOption>{props.option}</S.ItemOption>
                <S.ItemAddress>{props.link}</S.ItemAddress>
            </S.ItemElement>
            <td>1개</td>
            <td>{props.price}원</td>
            <td>{props.delivery_status}</td>
        </S.TableItem>
    )
}
export default ClubItem