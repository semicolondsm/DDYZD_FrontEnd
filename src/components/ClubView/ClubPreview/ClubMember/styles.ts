import styled from "styled-components";
import { color } from "../../../../style";

export const MemberHeader = styled.div`
    display: flex;
    width: 100%;
    padding: 0;
    color: ${color.grey500};
    margin-top: 14px;
    margin-bottom: 8px;
    justify-content: space-around;
    overflow: hidden;
`;

export const ClubMemberContainer = styled.div`
  background-color: #ffffff;
  position: relative;
  float: left;
  flex-direction: column;
  width: 350px;
  box-shadow: 0px 5px 5px #00000029;
  border-radius: 2px;
  margin: 16px 0 0 200px;  
  border-radius: 10px;
`;

export const Member = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 36px;
    /* margin-left: 12px; */
    &:hover {
      background-color: ${color.grey200};
      cursor: pointer;
  }
`;

export const MemberContainer = styled.div`
    height: 350px;
    overflow: scroll;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    padding: 0;
`;

export const MemberName = styled.div`
    font-size: 16px;
    margin: 0;
`;

export const MemberRole = styled.div`
    font-size: 14px;
    color: ${color.grey400};
    margin: 0;
`;

export const Dummy = styled.div`
    height: 20px;
    width: 100%;
    bottom: 0;
    background: white;
    position: absolute;
    filter: blur(10px);
`;