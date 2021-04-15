import React, { useEffect, useState } from "react";
import * as S from "./styles";
import club from "../../../../utils/api/club";

interface MemberData {
  user_name: string[];
  profile_image: null;
  gcn: number[];
  git: string;
}

function ClubMember({ club_id }: { club_id: number }) {
  const [data, setData] = useState<MemberData[]>([]);
  const [profilePic, setProfilePic] = useState<string[]>([]);
  const [gcn, setGcn] = useState<MemberData[]>([]);

  useEffect(() => {
    async function getData() {
      club
        .getMembers(club_id)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => console.log(e));
    }
    getData();
  }, []);

  return (
    <S.ClubMemberContainer>
      <S.MemberContainer>
        <img src="" />
        <S.MemberName>{data[0].user_name}</S.MemberName>
        <S.MemberRole>동아리장</S.MemberRole>
      </S.MemberContainer>
    </S.ClubMemberContainer>
  );
}

export default ClubMember;
