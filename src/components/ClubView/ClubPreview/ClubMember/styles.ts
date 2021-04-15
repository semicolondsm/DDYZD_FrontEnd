import styled from "styled-components";
import { color } from "../../../../style";


export const ClubMemberContainer = styled.div`
  background-color: #ffffff;
  float: left;
  flex-direction: column;
  width: 15%;
  box-shadow: 0px 5px 5px grey;
  border-radius: 1%;
  margin: 20px 0 0 20px;
`;

export const MemberContainer = styled.div`
    /* display: flex; */
    align-items: center;
    padding: 15px 25px;
    &img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid ${color.grey600};
        display: inline;
    }
    
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