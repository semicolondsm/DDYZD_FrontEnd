import * as s from './MainSlideStyle'
import { useEffect, Children, useState } from 'react';

const Menu =()=>{
    return(
        <s.MenuBar>
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

const MainSlide =()=>{
    const [transVal, setTransVal] = useState(0);
    const ImgData:string[] = [
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
        "https://images.ctfassets.net/hrltx12pl8hq/6t8IYKOGf5nTMziWSpfLhx/9b2930a451d8236630da76597d042fca/shutterstock-elements-hero.jpg",
        "https://images.ctfassets.net/hrltx12pl8hq/5GB8NL8DLpWzzYT1VbRV9s/f77ae0de17e856740d2b11340c76127f/Shutterstock_Select_Footage.jpg?fit=fill&w=480&h=268"
    ]
    const pos = ImgData.length;
    const rightShow=()=>{
        if(transVal == -pos + 1) setTransVal(0);
        else setTransVal(transVal-1)
    }
    const LeftShow=()=>{
        if(transVal == 0) setTransVal(-pos+1); 
        else setTransVal(transVal + 1)
    }

    return(
        <>
        <s.SlideContainer> 
            <s.SlideBox style={{width:ImgData.length * 100 + "%", transform:"translateX("+ transVal*100/pos + "%)"}}> {/* 슬라이드 이미지 */}
                {ImgData.map((e)=>{
                    return(<img src={e} style={{width:100/pos + "%"}}></img>)
                })}
            </s.SlideBox>
            <s.AllowContainer>
                <s.Allow onClick={LeftShow}>〈</s.Allow>
                <s.Allow onClick={rightShow}>〉</s.Allow>
            </s.AllowContainer>
            <Menu></Menu>
        </s.SlideContainer>
        <s.SlideUnderBar></s.SlideUnderBar>
        </>
    )
}

export default MainSlide;