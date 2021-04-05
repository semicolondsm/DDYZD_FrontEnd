import { ChatData } from "../../../../../interfaces";
import * as S from "./styles";
function ClubChat({ data }: { data: ChatData }) {
  return (
    <>
      <S.Wrapper>
        <S.ChatWrapper>
          <S.Chat>{data?.msg}</S.Chat>
        </S.ChatWrapper>
      </S.Wrapper>
    </>
  );
}
export default ClubChat;
