import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActiveLink from "../../Public/ActiveLink";
import club from "../../../utils/api/club";
import ClubIfnoData from "../../../interfaces/clubinfo";
import {
  useChatDispatch,
  useChatState,
} from "../../../utils/context/chatProvider";
import { getApplicant } from "../../../utils/context/actions/chatAction";
import * as S from "./styles";
import Loading from "../../Public/Loading/Loading";
function ChatStatusBoard({ club_id }: { club_id: number }) {
  const [clubInfo, setClubInfo] = useState<ClubIfnoData>();
  const [aplicant, setAplicant] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useChatDispatch();
  const router = useRouter();
  const state = useChatState();
  const { pathname } = router;
  useEffect(() => {
    if (club_id === undefined) return;
    club.getInfo(club_id).then((res) => setClubInfo(res.data));
    getApplicant(dispatch, club_id);
  }, [club_id]);

  useEffect(() => {
    setLoading(state.ApplicantList.loading);
    setAplicant(
      state.ApplicantList.data !== null ? state.ApplicantList.data : []
    );
  }, [state]);
  return (
    <S.Wrapper>
      {loading && <Loading />}
      <S.Header>
        <ActiveLink
          href={{ pathname: `/club/`, query: { club_id: clubInfo?.clubid } }}
        >
          <>
            <img
              src={`https://api.semicolon.live/file/${clubInfo?.clubimage}`}
            ></img>
            <p>{clubInfo?.clubname}</p>
          </>
        </ActiveLink>
      </S.Header>
      <S.Bottom>
        <h3>동아리 지원자 리스트 ({aplicant.length})</h3>
        <S.List>
          {aplicant.map((i: any) => (
            <li key={i.id}>
              <ActiveLink
                href={{
                  pathname: `${pathname.split("/chat")[0]}/chat`,
                  query: { chat_id: i.roomid },
                }}
                activeClassName="active"
              >
                <>
                  <div>
                    <img src={i.image} alt="프로필"></img>
                    <p>{i.name}</p>
                  </div>
                  <div>
                    {i.status === "S" ? (
                      <S.ClockIco></S.ClockIco>
                    ) : i.status === "R" ? (
                      <S.ConfirmIco></S.ConfirmIco>
                    ) : (
                      <S.BellIco></S.BellIco>
                    )}
                  </div>
                </>
              </ActiveLink>
            </li>
          ))}
        </S.List>
      </S.Bottom>
    </S.Wrapper>
  );
}
export default ChatStatusBoard;
