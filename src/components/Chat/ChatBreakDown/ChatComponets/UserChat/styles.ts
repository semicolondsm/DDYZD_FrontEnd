import styled from "styled-components";
export const Wrapper = styled.div`
  float: left;
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
  padding: 5px 12px;
  max-width: 300px;
  color: #050505;
  word-break: break-all;
  border-radius: 15px;
`;
export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SendAt = styled.p`
  font-size: 12px;
  color: #a4a4a4;
  margin-left: 5px;
`;
