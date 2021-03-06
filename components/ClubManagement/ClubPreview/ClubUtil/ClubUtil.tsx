import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import ModalContext from "../../../../utils/context/modals"
import * as S from "./styles"
function ClubUtil({club_id} : {club_id : number}){
    const { setModalState } = useContext(ModalContext);
    const history=useHistory();
    const { location : { pathname : path } }=history;
    return(
        <S.Wrapper>
            <S.UtilWrapper>
                <li onClick={()=>history.push(path+"/chat")}><S.memberIco/><p>멤버</p></li>
                <div>
                    <li onClick={()=>setModalState({state : "feed", club_id : club_id})}><S.feedIco/><p>글쓰기</p></li>
                    <li onClick={()=>setModalState({state : "hongbo", club_id : club_id})}><S.feedIco/><p>홍보물</p></li>
                    <li onClick={()=>setModalState({state : "recruitment", club_id : club_id})}><S.recruitmentIco/><p>모집공고</p></li>
                </div>
            </S.UtilWrapper>
        </S.Wrapper>
    )
}
export default ClubUtil