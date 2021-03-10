import styled from "styled-components";
import { color } from "../../../style";
import Menu from "../../../assets/images/feedmenu.svg";
import Search from "../../../assets/images/search.svg";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  max-width: 350px;
  padding: 20px 0;
  border-right: 1px solid #0000001a;
`;
export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  background: ${color.grey100};
  padding: 5px 15px;
  border-radius: 15px;
  margin: 0 10px;
  & input {
    border: none;
    outline: none;
    width: 100%;
    margin-left: 10px;
    font-size: 12px;
    background: transparent;
  }
`;
export const RoomListWrapper = styled.div`
  & h3 {
    font-size: 14px;
  }
  & > div {
    margin: 14px 15px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const LastMessage = styled.div`
  font-size: 12px !important;
  color: #a4a4a4;
  display: flex;
  align-items: center;
  & p {
    font-size: 12px !important;
    max-width: 150px;
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const RoomList = styled.ul`
  max-height: calc(100vh - 240px);
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  & a {
    padding: 8px 10px;
    color: black;
    margin: 0 5px;
    cursor: pointer;
    display: flex;
    border-radius: 10px;
    align-items: center;
    & img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
      border-radius: 50%;
    }
    & p {
      font-size: 15px;
    }
    &:hover {
      background: ${color.grey100};
      font-weight: bold;
    }
  }
`;

export const MenuIco = styled(Menu)`
  padding: 15px 10px;
  width: 35px;
  cursor: pointer;
`;
export const SearchIco = styled(Search)``;
