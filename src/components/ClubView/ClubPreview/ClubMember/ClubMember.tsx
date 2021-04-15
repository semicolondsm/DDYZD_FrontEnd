import React, { Fragment, useEffect, useState } from "react";
import * as S from "./styles";
import club from "../../../../utils/api/club";
import Loading from "../../../Public/Loading/Loading";
interface MemberData {
  user_name: string[];
  profile_image: null;
  gcn: number[];
  git: string;
  loading: boolean;
}

function ClubMember({ club_id }: { club_id: number }) {
  const [memberData, setMemberData] = useState<MemberData[]>([]);
  const [clubData, setClubData] = useState<MemberData | string>("");
  const [loading, setLoading] = useState<MemberData | boolean>(false);

  useEffect(() => {
    club.getMembers(club_id).then((res) => {
      setMemberData(res.data);
      setLoading(true);
    });
    club.getInfo(club_id).then((res) => {
      setClubData(res.data.clubname);
    });

    setLoading(false);
  }, []);

  if (!loading) return <Loading />;

  return (
    <Fragment>
      <S.ClubMemberContainer>
        <S.MemberHeader>
          <div>{clubData} 동아리원</div>
          <div>인원수: {memberData.length}명</div>
        </S.MemberHeader>
        <S.MemberContainer>
          <S.Member>
            <S.Img src={memberData[0].profile_image} />
            <div>
              <S.MemberName>{memberData[0].user_name}</S.MemberName>
              <S.MemberRole>동아리장</S.MemberRole>
            </div>
          </S.Member>
          {memberData.map((data, index) => {
            return (
              index !== 0 && (
                <S.Member>
                  <S.Img src={data.profile_image} />
                  <div>
                    <S.MemberName>{data.user_name}</S.MemberName>
                    <S.MemberRole>동아리원</S.MemberRole>
                  </div>
                </S.Member>
              )
            );
          })}
        </S.MemberContainer>
        <S.Dummy/>
      </S.ClubMemberContainer>
    </Fragment>
  );
}

export default ClubMember;
