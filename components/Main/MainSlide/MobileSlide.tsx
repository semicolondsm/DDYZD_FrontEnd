<<<<<<< HEAD
import * as s from "./styles";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import club from "@/utils/api/club";

interface paramsType {
  image: string;
  name: string;
}

const MobileSlide = () => {
  const [banner, setBanner] = useState([] as paramsType[]);
  const [loading, setLoading] = useState<boolean[]>([]);
  const bannerlength: MutableRefObject<number | undefined> = useRef();
  const [transVal, setTransVal] = useState(0);
  const timer: MutableRefObject<ReturnType<typeof setInterval> | null> = useRef(
    null
  );
  const CurBack = {
    background:
      "transparent linear-gradient(90deg, #FFE874 0%, #A45EE1 52%, #713EFF 100%) 0% 0% no-repeat padding-box",
  };
  const CurBorder = {
    backgroundImage:
      "linear-gradient(white,white), linear-gradient(90deg, #FFE874 0%, #A45EE1 52%, #713EFF 100%)",
  };
  const none = {
    display: "flex",
  };
  const resetTimer = () => {
    clearTimeout(timer.current!);
    setTimer();
  };
  const setTimer = () => {
    timer.current = setTimeout(() => {
      if (transVal == -bannerlength.current! + 1) {
        setTransVal(0);
      } else {
        setTransVal(transVal - 1);
      }
    }, 4000);
  };
  useEffect(() => {
    resetTimer();
  }, [transVal]);
  useEffect(setTimer, []);
  const ClubProfileClick = (index: number) => {
    resetTimer();
    setTransVal(-index);
  };
  useEffect(() => {
    club
      .getBanner()
      .then((res) => {
        setBanner(
          res.data.filter(
            ({ image }: { image: string | null }) => image !== null
          )
        );
        for (let i = 0; i < res.data.length; i++) {
          setLoading((prev) => {
            const temp = prev;
            temp.push(false);
            return temp;
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    bannerlength.current! = banner.length;
  }, [banner]);
  useEffect(() => {
    if (loading.find((val) => val === false) === undefined) {
      document.getElementById("asd")!.style.display = "grid";
    }
  }, [loading]);
  return (
    <s.MWrapper>
      <s.MSlideContainer>
        {/*             <Modal></Modal> */}
        <s.MSlideBox
          id="asd"
          count={bannerlength.current!}
          style={{
            transform: "translateX(" + transVal * 100 + "%)",
            display: "none",
          }}
        >
          {banner.map((e, index) => {
            return (
              <s.ImgWarpper>
                <s.Img
                  src={"https://api.semicolon.live/file/" + e.image}
                  key={index}
                  onLoad={() =>
                    setLoading((prev) =>
                      prev.map((_val, i) => (i === index ? true : false))
                    )
                  }
                />
              </s.ImgWarpper>
            );
          })}
        </s.MSlideBox>
      </s.MSlideContainer>
      <s.MSlideUnderBar>
        <s.MSlideUnderBarContent>
          {banner.map((e, index) => {
            return (
              <s.MClubProfileBox key={index}>
                <s.ClubProfile style={index == -transVal ? CurBorder : none}>
                  <img
                    draggable="false"
                    onClick={() => ClubProfileClick(index)}
                    src="https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png"
                  />
                </s.ClubProfile>
                <a>{e.name}</a>
                <s.ProfileLine
                  style={index == -transVal ? CurBack : none}
                ></s.ProfileLine>
              </s.MClubProfileBox>
            );
          })}
        </s.MSlideUnderBarContent>
      </s.MSlideUnderBar>
    </s.MWrapper>
  );
};

export default MobileSlide;
=======
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
        <s.MSlideBox count={pos} style={{width: 100 + "%", transform:"translateX("+ transVal*100 + "%)"}}> {/* 슬라이드 이미지 */}
                {ClubData.map((e,index)=>{
                    return(<img src={e.pictur} key={index} style={{width:100 + "%"}} />)
                })}
            </s.MSlideBox>
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
>>>>>>> develop
