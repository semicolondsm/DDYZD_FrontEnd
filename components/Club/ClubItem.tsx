import * as S from "./styles"
import CheckItem from "./CheckItem"
function ClubItem(){
    return(
        <S.TableItem>
            <S.ItemState>승인 완료<S.ButtonWrapper><CheckItem></CheckItem></S.ButtonWrapper></S.ItemState>
            <S.ItemElement>
                <S.ItemName>앱코 해커 B780 가상7.1 RGB 진동 게이밍 헤드셋</S.ItemName>
                <S.ItemOption>시크블랙</S.ItemOption>
                <S.ItemPrice>http://www.11st.co.kr/products/2513078761?trTysdsdsd</S.ItemPrice>
            </S.ItemElement>
            <td>1개</td>
            <td>59900원</td>
            <td>배송중</td>
        </S.TableItem>
    )
}
export default ClubItem