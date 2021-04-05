import styled from "styled-components";
import { color } from "../../../../../style";
import PrevSVG from "../../../../../assets/images/prev.svg";
import NextSVG from "../../../../../assets/images/next.svg";

const maxWidth = "630px";
export const PrevIco = styled(PrevSVG)``;
export const NextIco = styled(NextSVG)``;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  @media screen and (max-width: ${maxWidth}) {
    padding: 15px 15px;
    padding-bottom: 0;
  }
  padding-bottom: 0;
  margin-bottom: 10px;
  & img {
    width: 40px;
    height: 40px;
    border: 1px solid ${color.grey100};
    border-radius: 50%;
  }
`;

export const CardHeaderContent = styled.div`
  margin-left: 15px;
  width: 100%;
  font-size: 16px;
  @media screen and (max-width: ${maxWidth}) {
    font-size: 14px;
  }
`;
export const CreatedAt = styled.div`
  font-size: 14px;
  @media screen and (max-width: ${maxWidth}) {
    font-size: 12px;
  }
  color: ${color.grey400};
`;
export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  @media screen and (max-width: ${maxWidth}) {
    font-size: 13px;
  }
`;
export const CardBottom = styled.div`
  padding: 20px 25px;
  padding-top: 0;
  @media screen and (max-width: ${maxWidth}) {
    padding: 20px 20px;
    padding-top: 0;
  }
`;
export const Content = styled.div`
  padding: 0 25px;
  margin-bottom: 10px;
  @media screen and (max-width: ${maxWidth}) {
    padding: 0px 15px;
  }
`;
export const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-y: hidden;
  position: relative;
  height: 0;
  padding-bottom: 100%;
  & button {
    position: absolute;
    top: 50%;
    outline: none;
    background: none;
    border: none;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
export const SliderImages = styled.div`
  display: flex;
  width: 100%;
  transition: 0.3s;
  height: 0px;
  padding-bottom: 100%;
  & img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    object-fit: cover;
    -webkit-user-drag: none;
  }
`;
export const Prev = styled.button`
  left: 10px;
`;
export const Next = styled.button`
  right: 10px;
`;
export const SliderState = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  justify-content: center;
`;
export const StateButton = styled.div`
  width: 7px;
  height: 7px;
  margin-right: 4px;
  background: ${color.grey400};
  border-radius: 50%;
`;
export const CardUtil = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
  & svg {
    cursor: pointer;
  }
  & div {
    & svg {
      padding-right: 10px;
    }
  }
`;
export const CardState = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: bold;
  color: ${color.grey600};
  margin-top: 5px;

  @media screen and (max-width: ${maxWidth}) {
    font-size: 11px;
  }
`;
