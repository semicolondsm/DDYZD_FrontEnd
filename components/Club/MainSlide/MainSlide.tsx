import * as s from './MainSlideStyle'
import { useEffect, Children, useState } from 'react';
import { INSPECT_MAX_BYTES } from 'buffer';
import Modal from './Modal'

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
    const ClubData = [
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://lh3.googleusercontent.com/proxy/cs4vlBgF3OeAqiNdGJ4lqz-ziNIQJ81oWipJbGc1D54S5zLm7VZDS0ksTp1LuBQYPszk1m2eNK3nAiJ8e27DjWi7x8CmgjAMM-mliALHPG6oejoMFEcrLA1VzmvVFhVCyTr3gYaDyeljPq1cCe_gxQ400F-E04m5GJc",
            name : "SEMICOLON;"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://lh3.googleusercontent.com/proxy/cs4vlBgF3OeAqiNdGJ4lqz-ziNIQJ81oWipJbGc1D54S5zLm7VZDS0ksTp1LuBQYPszk1m2eNK3nAiJ8e27DjWi7x8CmgjAMM-mliALHPG6oejoMFEcrLA1VzmvVFhVCyTr3gYaDyeljPq1cCe_gxQ400F-E04m5GJc",
            name : "MODEEP"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://lh3.googleusercontent.com/proxy/cs4vlBgF3OeAqiNdGJ4lqz-ziNIQJ81oWipJbGc1D54S5zLm7VZDS0ksTp1LuBQYPszk1m2eNK3nAiJ8e27DjWi7x8CmgjAMM-mliALHPG6oejoMFEcrLA1VzmvVFhVCyTr3gYaDyeljPq1cCe_gxQ400F-E04m5GJc",
            name : "SINABRO"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://lh3.googleusercontent.com/proxy/cs4vlBgF3OeAqiNdGJ4lqz-ziNIQJ81oWipJbGc1D54S5zLm7VZDS0ksTp1LuBQYPszk1m2eNK3nAiJ8e27DjWi7x8CmgjAMM-mliALHPG6oejoMFEcrLA1VzmvVFhVCyTr3gYaDyeljPq1cCe_gxQ400F-E04m5GJc",
            name : "SEMICOLON;"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://lh3.googleusercontent.com/proxy/cs4vlBgF3OeAqiNdGJ4lqz-ziNIQJ81oWipJbGc1D54S5zLm7VZDS0ksTp1LuBQYPszk1m2eNK3nAiJ8e27DjWi7x8CmgjAMM-mliALHPG6oejoMFEcrLA1VzmvVFhVCyTr3gYaDyeljPq1cCe_gxQ400F-E04m5GJc",
            name : "MODEEP"
        },
        {
            pictur :     "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
            img : "https://lh3.googleusercontent.com/proxy/cs4vlBgF3OeAqiNdGJ4lqz-ziNIQJ81oWipJbGc1D54S5zLm7VZDS0ksTp1LuBQYPszk1m2eNK3nAiJ8e27DjWi7x8CmgjAMM-mliALHPG6oejoMFEcrLA1VzmvVFhVCyTr3gYaDyeljPq1cCe_gxQ400F-E04m5GJc",
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
    let i:number = 0;
    return(
        <>
        <s.SlideContainer> 
            <Modal></Modal>
        <s.SlideBox style={{width:ClubData.length * 100 + "%", transform:"translateX("+ transVal*100/pos + "%)"}}> {/* 슬라이드 이미지 */}
                {ClubData.map((e)=>{
                    return(<img src={e.pictur} style={{width:100/pos + "%"}}></img>)
                })}
            </s.SlideBox>
            <s.AllowContainer>
                <s.Allow onClick={LeftShow}>〈</s.Allow>
                <s.Allow onClick={rightShow}>〉</s.Allow>
            </s.AllowContainer>
            <Menu></Menu>
        </s.SlideContainer>
        <s.SlideUnderBar>
          {ClubData.map((e)=>{ 
              i++;
              e.id = i;
              if(e.id == -transVal){
                  console.log(e.id)
                  console.log('sdf')
              }
                return(
                    <s.ClubProfileBox>
                        <s.ClubProfile style={(e.id-1 == -transVal)?CurBorder:none}><img src={e.img}></img></s.ClubProfile>
                            <a>{e.name}</a>
                        <s.ProfileLine style={(e.id-1 == -transVal)?CurBack:none}></s.ProfileLine>
                    </s.ClubProfileBox>
                )
            })} 
        </s.SlideUnderBar>
        </>
    )
}

export default MainSlide;