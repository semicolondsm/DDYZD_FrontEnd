import * as s from './styles'
import { useState } from 'react';
import useInterval from '../../../utils/hooks'
import Menu from '../Menu/Menu';

const MainSlide =()=>{
    const ClubData = [
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
            name : "SEMICOLON;"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
            name : "MODEEP"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
            name : "SINABRO"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
            name : "SEMICOLON;"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
            name : "MODEEP"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
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
        <>
        <s.SlideContainer> 
{/*             <Modal></Modal> */}
        <s.SlideBox style={{width:ClubData.length * 100 + "%", transform:"translateX("+ transVal*100/pos + "%)"}}> {/* 슬라이드 이미지 */}
                {ClubData.map((e,index)=>{
                    return(<img src={e.pictur} key={index} style={{width:100/pos + "%"}}></img>)
                })}
            </s.SlideBox>
            <s.AllowContainer>
                <s.Allow onClick={LeftShow}>〈</s.Allow>
                <s.Allow onClick={rightShow}>〉</s.Allow>
            </s.AllowContainer>
            <Menu></Menu>
        </s.SlideContainer>
        <s.SlideUnderBar>
          {ClubData.map((e, index)=>{ 
                return(
                    <s.ClubProfileBox key={index}>
                        <s.ClubProfile style={(index == -transVal)?CurBorder:none}><img onClick={()=>ClubProfileClick(index)} src={e.img}></img></s.ClubProfile>
                            <a>{e.name}</a>
                        <s.ProfileLine style={(index == -transVal)?CurBack:none}></s.ProfileLine>
                    </s.ClubProfileBox>
                )
            })} 
        </s.SlideUnderBar>
        </>
    )
}

export default MainSlide;