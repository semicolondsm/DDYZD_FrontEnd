import { ChatData } from "../../../../../interfaces";
import * as S from "./styles";
function InterviewResult({ data, info }: { data: ChatData; info: any }) {
  return (
    <S.Wrapper>
      <img src={info?.image}></img>
      <S.ChatWrapper>
        <S.Chat>
          <h3>{data.title}</h3>
          <p>{data.msg}</p>
        </S.Chat>
      </S.ChatWrapper>
    </S.Wrapper>
  );
}
export default InterviewResult;
