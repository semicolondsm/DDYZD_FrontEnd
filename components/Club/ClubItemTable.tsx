import ClubItem from "./ClubItem";
import * as S from "./styles"
import ToggleItem from "./CheckItem";
const data: object[] = [{},{},{}];
function ClubItemTable(){
    return(
        <S.Table>
            <S.TableHead>
                <th>
                    <S.TableNameWrapper>
                        <ToggleItem></ToggleItem>
                        <span>안은결</span>
                    </S.TableNameWrapper>
                </th>
                <S.TableName>신청물품 (1개)</S.TableName>
                <th>수량</th>
                <th>가격</th>
                <th>상태</th>
            </S.TableHead>
            <S.TableBody>
                {
                    data.map((i)=>{
                        return(<ClubItem></ClubItem>)
                    })
                }
            </S.TableBody>
        </S.Table>
    )
}
export default ClubItemTable