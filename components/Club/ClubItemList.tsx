import { GlobalStyle } from "../GlobalStyled"
import * as S from "./styles"
function ClubItemList(){
    return(
        <>
            <GlobalStyle></GlobalStyle>
            <S.Container>
                <S.Wrapper>
                    <S.ItemHeader>
                        <S.Name>안은결</S.Name>
                        
                    </S.ItemHeader>
                </S.Wrapper>
            </S.Container>
        </>
    )
}
export default ClubItemList