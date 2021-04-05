import * as s from "./styles"
import {setState} from '../../../context/context'

const Menu =()=>{
    const dispatch = setState();
    return (
        <s.MenuBar onClick={()=>{dispatch({type:"SET_MODAL",name:"mainModal"})}}>
            <s.TitleMenu>전공 동아리</s.TitleMenu>
            <s.DetailMenu>웹</s.DetailMenu>
            <s.DetailMenu>앱</s.DetailMenu>
            <s.DetailMenu>임베디드  </s.DetailMenu>
            <s.DetailMenu>게임</s.DetailMenu>
            <s.DetailMenu>인공지능</s.DetailMenu>
            <s.DetailMenu>정보보안</s.DetailMenu>
            <s.TitleMenu>창체 동아리</s.TitleMenu>
            <s.DetailMenu>교과목</s.DetailMenu>
            <s.DetailMenu>전공과목</s.DetailMenu>
            <s.DetailMenu>스포츠</s.DetailMenu>
            <s.DetailMenu>예술 창의 교양</s.DetailMenu>
            <s.DetailMenu>교내활동</s.DetailMenu>
            <s.DetailMenu>기타</s.DetailMenu>   
        </s.MenuBar>
    )
}
export default Menu;