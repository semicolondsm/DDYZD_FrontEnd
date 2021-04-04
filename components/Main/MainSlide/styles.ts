import styled from "styled-components";
import { color } from "../../../style";

export const SlideContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  min-width: 1500px;
  background-color: whitesmoke;
  position: relative;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`; // 동아리 홍보사진 div

export const MWrapper = styled.div`
  background: white;
`;
export const MSlideContainer = styled.div`
  width: 100vw;
  height: 50vw;
  display: flex;
  box-sizing: content-box;
  background-color: gray;
  position: relative;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const MSlideUnderBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 25px;
  display: flex;
  justify-content: center;
`;
export const MSlideUnderBarContent = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const MClubProfileBox = styled.div`
  width: 86px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12.5px;
  font-family: sans-serif;
  color: black;
  padding: 0 5px;
  margin-right: 15px;
  a {
    padding: 5px 0;
  }
`;
export const MSlideBox = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, 100%);
  grid-template-rows: 100%;
  transition: 1s;
  width: 100%;
  height: 100%;
  justify-items: center;
`;
export const ImgWarpper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  width: auto;
  height: 100%;
`;
export const MClubProfile = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  border: 1px solid;
  border: 2px solid transparent;
  border-radius: 80%;
  background-image: linear-gradient(white, white),
    linear-gradient(${color.grey500}, ${color.grey500});
  background-origin: border-box;
  background-clip: content-box, border-box;
  img {
    cursor: pointer;
    width: 90%;
    height: 90%;
    border-radius: 80%;
    object-fit: cover;
    background-color: white;
  }
`;

export const MProfileLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${color.grey300};
  margin-top: 3px;
`;

export const UnderBar = styled.div`
  width: 100%;
  background-color:white;
  height:120px;
  border-bottom: 1px solid ${color.grey300};
  min-width: 1500px;
  overflow-x:scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideUnderBar = styled.div`
  width: 100%;
  padding:10px 0;
  min-width: 1000px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
  position: relative;
  opacity: 0;
  transition: 1s;
  ::-webkit-scrollbar {
    display: none;
  }
`; // 아래 동아리 프로필 div

export const AllowContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

export const Allow = styled.div`
  width: 5%;
  height: 20%;
  font-size: 5vmin;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SlideBox = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  min-width: 1000px;
  position: absolute;
  transition: 1s;
  align-items:center;
  justify-content:center;
  opacity: 0;
`;

export const Box = styled.div`
  width: 200%;
  height: 700px;
`;

export const ClubProfileBox = styled.div`
  width: 86px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3vmin;
  font-family: sans-serif;
  color: black;
  padding: 0 1%;
  a {
    padding: 3% 0;
  }
`;

export const ClubProfile = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
  border: 1px solid;
  border: 2px solid transparent;
  border-radius: 80%;
  background-image: linear-gradient(white, white),
    linear-gradient(${color.grey500}, ${color.grey500});
  background-origin: border-box;
  background-clip: content-box, border-box;
  img {
    cursor: pointer;
    width: 90%;
    height: 90%;
    border-radius: 80%;
    object-fit: cover;
    background-color: white;
  }
`;

export const ProfileLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${color.grey300};
  margin-top: 2%;
`;
