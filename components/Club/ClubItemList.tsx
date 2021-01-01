import ClubItemTable from "./ClubItemTable"
import * as S from "./styles"
const Data=[{},{}];
function ClubItemList(){
    return(
        <S.Container>
            {
                Data.map((i)=>{
                    console.log(i);
                    return(<ClubItemTable></ClubItemTable>)
                })
            }
        </S.Container>
    )
}
export default ClubItemList