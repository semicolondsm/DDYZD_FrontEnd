import * as s from "./styles";
import { useState, createRef, useEffect } from "react";
import useInterval from "../../../utils/hooks";
import Menu from "../Menu/Menu";
import club from "@/src/utils/api/club";

const MainSlide = () => {
  const [transVal, setTransVal] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [promoData, setPromoData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const UnderProfile = createRef<HTMLDivElement>();
  const SlideCont = createRef<HTMLDivElement>();
  const pos = promoData.length;
  const CurBorder = {
    backgroundImage:
      "linear-gradient(white,white), linear-gradient(90deg, #FFE874 0%, #A45EE1 52%, #713EFF 100%)",
  };
  const none = {
    display: "flex",
  };
  const rightShow = () => {
    if (transVal == -pos + 1) setTransVal(0);
    else setTransVal(transVal - 1);
    setDelay(6000);
    setTimeout(() => {
      setDelay(5000);
    }, 8000);
  };
  const LeftShow = () => {
    if (transVal == 0) setTransVal(-pos + 1);
    else setTransVal(transVal + 1);
    setDelay(6000);
    setTimeout(() => {
      setDelay(5000);
    }, 8000);
  };

  const ClubProfileClick = (index: number) => {
    setTransVal(-index);
    setDelay(6000);
    setTimeout(() => {
      setDelay(5000);
    }, 8000);
  };
  useInterval(() => {
    if (transVal == -pos + 1) {
      setTransVal(0);
    } else {
      setTransVal(transVal - 1);
    }
  }, delay);
  useEffect(() => {
    club.getClubPromotion().then((e) => {
      setData(e.data);
    });
  }, []);
  useEffect(() => {
    setPromoData(data.filter((e: any) => e.image != null));
  }, [data]);
  useEffect(() => {
    if (data.length > 0) {
      setTimeout(() => {
        if (SlideCont.current !== null && UnderProfile.current !== null) {
          SlideCont.current.style.opacity = "1";
          UnderProfile.current.style.opacity = "1";
        }
      }, 1000);
    }
  });
  return (
    <>
      <s.SlideContainer>
        <s.SlideBox ref={SlideCont}>
          {" "}
          {/* 슬라이드 이미지 */}
          {promoData.map((e: any, index: any) => {
            return (
              e.image != null && (
                <img
                  src={"https://api.eungyeol.live/file/" + e.image}
                  key={index}
                  style={
                    transVal === -index
                      ? {
                          height: "100%",
                          objectFit: "contain",
                          position: "absolute",
                          opacity: 1,
                          transition: "1s",
                        }
                      : {
                          height: "100%",
                          objectFit: "contain",
                          position: "absolute",
                          opacity: 0,
                          transition: "1s",
                        }
                  }
                ></img>
              )
            );
          })}
        </s.SlideBox>
        <s.AllowContainer>
          <s.Allow onClick={LeftShow}>〈</s.Allow>
          <s.Allow onClick={rightShow}>〉</s.Allow>
        </s.AllowContainer>
        <Menu></Menu>
      </s.SlideContainer>
      <s.UnderBar>
        <s.SlideUnderBar ref={UnderProfile}>
          {promoData.map((e: any, index: any) => {
            return (
              e.image != null && (
                <s.ClubProfileBox key={index}>
                  <s.ClubProfile style={index === -transVal ? CurBorder : none}>
                    <img
                      onClick={() => ClubProfileClick(index)}
                      src={"https://api.eungyeol.live/file/" + e.profile}
                    ></img>
                  </s.ClubProfile>
                  <a style={{ whiteSpace: "nowrap" }}>{e.name}</a>
                  <s.ProfileLine>
                    <s.AnimLine style={index === -transVal ? {width : "100%"} : {width:"0%", transition:"0s"}}/>
                  </s.ProfileLine>
                </s.ClubProfileBox>
              )
            );
          })}
        </s.SlideUnderBar>
      </s.UnderBar>
    </>
  );
};

export default MainSlide;
