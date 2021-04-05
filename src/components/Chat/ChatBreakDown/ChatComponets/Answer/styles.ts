import styled from "styled-components";
export const Wrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  & img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin: 0 10px;
  }
`;
export const Chat = styled.span`
  background: #f5f5f5;
  padding: 10px 12px;
  max-width: 350px;
  min-width: 350px;
  margin-right: 10px;
  color: #050505;
  word-break: break-all;
  border-radius: 10px;
  & h3 {
    font-size: 15px;
  }
  & p {
    margin-top: 5px;
    font-size: 12px;
  }
`;
export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
`;
