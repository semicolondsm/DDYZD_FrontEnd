import styled from "styled-components";
import Confirm from "../../../assets/images/confirm.svg";
import Clock from "../../../assets/images/statusclock.svg";
import Bell from "../../../assets/images/bell.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 55px);
  max-width: 300px;
  padding: 20px 0;
  border-right: 1px solid #0000001a;
  & h3 {
    font-size: 14px;
  }
`;
export const Header = styled.div`
  & a {
    display: flex;
    align-items: center;
    margin: 0 15px;
    color: black;
  }
  & img {
    border-radius: 50%;
    object-fit: cover;
    width: 35px;
    height: 35px;
    border: 1px solid #c8c8c8;
  }
  & p {
    font-size: 14px;
    margin-left: 5px;
  }
`;
export const Bottom = styled.div`
  margin: 10px 0;
  & h3 {
    margin: 0 15px;
  }
`;
export const List = styled.ul`
  & a {
    color: black;
    padding: 8px 10px;
    margin: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    & p {
      font-size: 13px;
      margin-left: 5px;
    }
    & div {
      display: flex;
      align-items: center;
      & svg {
        margin: 0 2px;
      }
    }
    & img {
      width: 35px;
      height: 35px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid #c8c8c8;
    }
    &:hover {
      background: #f5f5f5;
    }
  }
`;
export const ConfirmIco = styled(Confirm)`
  cursor: pointer;
`;
export const BellIco = styled(Bell)`
  cursor: pointer;
`;
export const ClockIco = styled(Clock)`
  cursor: pointer;
`;
