import { ChatData } from "../../../../../interfaces";
import * as S from "./styles";
function Answer({ data }: { data: ChatData }) {
  return (
    <S.Wrapper>
      <S.ChatWrapper>
        <S.Chat>
          <h3>{data.title}</h3>
          <p>{data.msg}</p>
        </S.Chat>
      </S.ChatWrapper>
    </S.Wrapper>
  );
}
export default Answer;
