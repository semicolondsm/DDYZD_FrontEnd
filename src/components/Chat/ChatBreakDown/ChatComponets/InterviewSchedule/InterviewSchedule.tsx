import { ChatData } from "../../../../../interfaces";
import * as S from "./styles";
function InterviewSchedule({ data, info }: { data: ChatData; info: any }) {
  return (
    <S.Wrapper>
      <img src={info?.image}></img>
      <S.ChatWrapper>
        <S.Chat>
          <h3>{data.title}</h3>
          <p>{data.msg.split(/(?:\r\n|\r|\n)/g)[0]}</p>
          <p style={{ marginTop: "10px" }}>
            {data.msg.split(/(?:\r\n|\r|\n)/g)[2]}
          </p>
          <p>{data.msg.split(/(?:\r\n|\r|\n)/g)[3]}</p>
        </S.Chat>
      </S.ChatWrapper>
    </S.Wrapper>
  );
}
export default InterviewSchedule;
