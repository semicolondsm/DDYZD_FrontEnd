import * as S from "./styles";
import Header from "../Public/Header/Header";
import { useState, useEffect } from "react";
import user from "../../utils/api/user";
import { withRouter } from "next/router";
import Link from "next/link";
interface ClubData{
  club_id : number,
  club_name : string,
  club_image : string
}
interface ProfileData{
  bio: string | null,
  clubs: ClubData[],
  email: string,
  gcn: string,
  github_url: string | null,
  id: number,
  image_path: string | null,
  name: string
}
function UserProfilePage({ router } : { router : any}) {
  const [github, setGithub] = useState<string>("");
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [introduction, setIntroduction] = useState<string>("");
  const [githubError, setGithubError] = useState<boolean>(false);
  const [profileError, setprofileError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    router.query.id && user.getUserInfo(router.query.id)
    .then((res)=>{
      setProfile(res.data);
      setGithub(res.data.github_url)
      setIntroduction(res.data.bio)
    })
    console.log(profile?.name);
  }, [router])
  const putInfoGithub = async () => {
    try {
      await user.postUserInformationGithub(github);
      setGithubError(false);
    } catch (error) {
      setGithubError(true);
    }
  };

  const putInfoIntro = async () => {
    try {
      await user.postUserInformationIntro(introduction);
      setprofileError(false);
    } catch (error) {
      setprofileError(true);
    }
  };
  const submit = async () =>{
    setLoading(true);
    await putInfoIntro();
    await putInfoGithub();
    setLoading(false);
    user.getUserInfo(router.query.id)
    .then((res)=>{
      setProfile(res.data);
    })
  }
  return (
    <>
      <Header color="white" />
      {
        profile ?
      <S.Container>
        <h2>프로필 정보</h2>
        <div>
          
          <div>
            <S.ForInfo>
              <h2>이름 </h2>
              <p>{profile.name}</p>
            </S.ForInfo>

            <S.ForInfo>
              <h2>학번 </h2>
              <p>No.{profile.gcn}</p>
            </S.ForInfo>

            <S.ForInfo error={githubError}>
              <h2>Github 아이디</h2>
              <input
                type="text"
                maxLength={75}
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </S.ForInfo>

            <S.ForInfo error={profileError}>
              <h2>자기소개 </h2>
              <textarea 
                maxLength={75}
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
            </S.ForInfo>
            <S.ForInfo>
              <h2>소속중인 동아리</h2>
              <S.MSlideUnderBar>
              <S.MSlideUnderBarContent>
              {profile.clubs.map((e, index)=>{ 
                  return(
                    <Link href={`/clubinfo?id=${e.club_id}`}>
                      <S.MClubProfileBox key={index}>
                          <S.ClubProfile ><img src={`https://api.eungyeol.live/file/${e.club_image}`}></img></S.ClubProfile>
                              <a>{e.club_name}</a>
                      </S.MClubProfileBox>
                    </Link>
                  )
              })} 
              </S.MSlideUnderBarContent>
          </S.MSlideUnderBar>
            </S.ForInfo>
            {
              loading ? 
                <S.DisableBT>변경중...</S.DisableBT>
              :<button onClick={submit}>프로필 업데이트</button>
            }
          </div>
          <div>
            <S.ProfilePicture>
              <img src={profile.image_path ? profile.image_path : "null"} />
            </S.ProfilePicture>
          </div>
          </div>
      </S.Container>
      : null
      }
    </>
  );
}

export default withRouter(UserProfilePage);
