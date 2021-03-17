import styled from "styled-components";

import { color } from "../../../style";

export const BoxCover = styled.div`
  width: 360px;
  height: 600px;
`;

export const DesCont = styled.div`
  width: 320px;
  display: flex;
`;

export const ApplyItem = styled.p`
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-left: 10px;
`;

export const Tip = styled.div`
  width: 38px;
  height: 24px;
  border: 1px solid ${color.grey300};
  border-radius: 12px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.grey300};
  font-weight: bold;
  margin-top: 3px;
`;

export const SmallDesCont = styled.div`
  width: 300px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Ment = styled.p`
  padding-right: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

export const Select = styled.select`
  width: 300px;
  height: 34px;
  margin-top: 10px;
  border: 1.7px solid ${color.grey300};
  outline: none;
  color: gray;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemInput = styled.input`
  width: 300px;
  height: 40px;
  background-color: ${color.grey100};
  border: none;
  margin-top: 5px;
  outline: none;
  padding: 0 10px;
  color: black;
  font-weight: bold;
`;

export const line = styled.section`
  width: 300px;
  height: 1px;
  background-color: ${color.grey300};
  margin-top: 10px;
`;

export const ItemName = styled.section`
  width: 300px;
  background-color: ${color.grey100};
  border: none;
  margin-top: 5px;
  outline: none;
  padding: 8px 10px;
  color: black;
  font-weight: bold;
  font-size: 13px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemCount = styled.article`
  width: 300px;
  height: 34px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.div`
  width: 54px;
  height: 32px;
  border-collapse: collapse;
  border-top: 1px solid ${color.grey300};
  border-bottom: 1px solid ${color.grey300};
  padding: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const ConutDiv = styled.div`
  margin-top: 0px;
  padding: none;
  width: 120px;
  height: 100%;
  display: flex;
`;

export const StatusBtn = styled.button`
  width: 32px;
  height: 32px;
  border-collapse: collapse;
  border: 1px solid ${color.grey300};
  background-color: transparent;
  font-size: 20px;
  color: ${color.grey300};
  outline: none;
  cursor: pointer;
`;

export const ApplyButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 24px;
  color: white;
  background-color: ${color.purple300};
  border: none;
  font-size: 18px;
  cursor: pointer;
  outline:none;
  :hover{
      box-shadow:0px 0px 6px skyblue;
  }
`;