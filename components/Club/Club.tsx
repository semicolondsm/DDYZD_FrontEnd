import ClubItemList from "./ClubItemList";
import ClubItemApply from './ClubItemApply';
import * as S from "./styles"
function Club(){
    return(
        <div style={{minWidth: "1500px"}}>
            <S.ClubContainer>
                <ClubItemList></ClubItemList>
                <ClubItemApply></ClubItemApply>
            </S.ClubContainer>
        </div>
    )
}
export default Club;