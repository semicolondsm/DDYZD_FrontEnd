import * as s from "./styles";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import useInterval from "../../../utils/hooks";
import club from "@/utils/api/club";

interface paramsType {
  image: string;
  name: string;
}

const MobileSlide = () => {
  const [banner, setBanner] = useState([] as paramsType[]);
  const bannerlength: MutableRefObject<number | undefined> = useRef();
  const [transVal, setTransVal] = useState(0);
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
  const ClubProfileClick = (index: number) => {
    setTransVal(-index);
  };
  useEffect(() => {
    club
      .getBanner()
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useInterval(() => {
    if (transVal == -bannerlength.current! + 1) {
      setTransVal(0);
    } else {
      setTransVal(transVal - 1);
    }
  }, 3000);
  useEffect(() => {
    bannerlength.current! = banner.length;
  }, [banner]);
  return (
    <s.MWrapper>
      <s.MSlideContainer>
        {/*             <Modal></Modal> */}
        <s.MSlideBox
          count={bannerlength.current!}
          style={{
            width: 100 + "%",
            transform: "translateX(" + transVal * 100 + "%)",
          }}
        >
          {" "}
          {/* 슬라이드 이미지 */}
          {banner.map((e, index) => {
            return (
              <img
                src={"https://api.semicolon.live/file/" + e.image}
                key={index}
                style={{ width: 100 + "%" }}
              />
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
