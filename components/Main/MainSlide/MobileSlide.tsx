import * as s from './styles'
import { useState } from 'react';
import useInterval from '../../../utils/hooks';

const MobileSlide =()=>{
    const temp = {
        pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
        img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png"
    }
    const ClubData = [
        {
            ...temp,
            name : "SEMICOLON;"
        },
        {
            ...temp,
            name : "MODEEP"
        },
        {
            ...temp,
            name : "SINABRO"
        },
        {
            ...temp,
            name : "SEMICOLON;"
        },
        {
            ...temp,
            name : "MODEEP"
        },
        {
            ...temp,
            name : "SINABRO"
        }
    ]
    const [transVal, setTransVal] = useState(0);
    const pos = ClubData.length;
    const CurBack ={background: "transparent linear-gradient(90deg, #FFE874 0%, #A45EE1 52%, #713EFF 100%) 0% 0% no-repeat padding-box"}
    const CurBorder = {
        backgroundImage: "linear-gradient(white,white), linear-gradient(90deg, #FFE874 0%, #A45EE1 52%, #713EFF 100%)"
    }
    const none = {
        display:"flex"
    }
    const rightShow=()=>{
        if(transVal == -pos + 1) setTransVal(0);
        else setTransVal(transVal-1)
    }
    const LeftShow=()=>{
        if(transVal == 0) setTransVal(-pos+1); 
        else setTransVal(transVal + 1)
    }
    const ClubProfileClick =(index:number)=>{
        setTransVal(-index)
    }
    useInterval(()=>{
        if(transVal == -pos+1){
            setTransVal(0)
        }
        else{
            setTransVal(transVal-1)
        }
    },3000)
    return(
        <s.MWrapper>
        <s.MSlideContainer> 
{/*             <Modal></Modal> */}
        <s.SlideBox style={{width:ClubData.length * 100 + "%", transform:"translateX("+ transVal*100/pos + "%)"}}> {/* 슬라이드 이미지 */}
                {ClubData.map((e,index)=>{
                    return(<img src={e.pictur} key={index} style={{width:100/pos + "%"}}></img>)
                })}
            </s.SlideBox>
        </s.MSlideContainer>
        <s.MSlideUnderBar>
            <s.MSlideUnderBarContent>
            {ClubData.map((e, index)=>{ 
                    return(
                        <s.MClubProfileBox key={index}>
                            <s.ClubProfile style={(index == -transVal)?CurBorder:none}><img onClick={()=>ClubProfileClick(index)} src={e.img}></img></s.ClubProfile>
                                <a>{e.name}</a>
                            <s.ProfileLine style={(index == -transVal)?CurBack:none}></s.ProfileLine>
                        </s.MClubProfileBox>
                    )
                })} 
            </s.MSlideUnderBarContent>
        </s.MSlideUnderBar>
        </s.MWrapper>
    )
}

export default MobileSlide;