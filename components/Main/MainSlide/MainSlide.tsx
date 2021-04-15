import * as s from './styles'
import { useState } from 'react';
import useInterval from '../../../utils/hooks'
import Menu from '../Menu/Menu';
import {getState} from '../../../context/context'
import Modal from '@/components/Public/Modals/Menu';
import club from '@/utils/api/clubItem'
import { useEffect } from 'react';

const MainSlide =()=>{
    const state = getState();
    const [transVal, setTransVal] = useState(0);
    const [delay,setDelay] = useState(5000);
    const [promoData,setPromoData] = useState<any>([])
    const [data,setData] = useState<any>([]);
    const pos = promoData.length;
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
        setDelay(6000);
        setTimeout(() => {
            setDelay(5000);
        }, 8000);
    }
    useInterval(()=>{
        if(transVal == -pos+1){
            setTransVal(0)
        }
        else{
            setTransVal(transVal-1)
        }
    },delay)
    useEffect(()=>{
        club.getClubPromotion()
        .then((e)=>{
            setData(e.data)
        })
    },[])
    useEffect(()=>{
        setPromoData(data.filter((e : any) => e.image != null))
    },[data])
    return(
        <>
        <s.SlideContainer> 
        {state.modalName === "mainModal" && <Modal></Modal>}
        <s.SlideBox style={{width:promoData.length * 100 + "%", transform:"translateX("+ transVal*100/pos + "%)"}}> {/* 슬라이드 이미지 */}
                {promoData.map((e:any,index:any)=>{
                    return e.image != null && <img src={"https://api.eungyeol.live/file/" + e.image} key={index} style={{width:100/pos + "%", objectFit:"contain"}}></img>
                })}
            </s.SlideBox>
            <s.AllowContainer>
                <s.Allow onClick={LeftShow}>〈</s.Allow>
                <s.Allow onClick={rightShow}>〉</s.Allow>
            </s.AllowContainer>
            <Menu></Menu>
        </s.SlideContainer>
        <s.SlideUnderBar>
          {promoData.map((e:any, index:any)=>{ 
                return e.image != null &&
                    <s.ClubProfileBox key={index}>
                        <s.ClubProfile style={(index == -transVal)?CurBorder:none}><img onClick={()=>ClubProfileClick(index)} src={"https://api.eungyeol.live/file/" + e.profile}></img></s.ClubProfile>
                            <a>{e.name}</a>
                        <s.ProfileLine style={(index == -transVal)?CurBack:none}></s.ProfileLine>
                    </s.ClubProfileBox>
                
            })} 
        </s.SlideUnderBar>
        </>
    )
}

export default MainSlide;