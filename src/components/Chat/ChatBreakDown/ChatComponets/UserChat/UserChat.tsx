import { ChatData } from "../../../../../interfaces";
import * as S from "./styles";
function date(params: Date) {
  let date = new Date(params);
  let diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return `${date.getFullYear()}년 ${date.getDay()}월 ${date.getDate()}일`;
  return (
    (day_diff == 0 &&
      ((diff < 60 && "방금") ||
        (diff < 120 && "1분 전") ||
        (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
        (diff < 7200 && "1시간 전") ||
        (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
    (day_diff == 1 && "어제") ||
    (day_diff < 7 && day_diff + "일 전") ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
  );
}

function UserChat({ data, info }: { info: any; data: ChatData }) {
  return (
    <>
      <S.Wrapper>
        <img src={info?.image}></img>
        <S.ChatWrapper>
          <S.Chat>{data.msg}</S.Chat>
          <S.SendAt>
            {data.date ? date(data.date) : date(data.created_at)}
          </S.SendAt>
        </S.ChatWrapper>
      </S.Wrapper>
    </>
  );
}
export default UserChat;
