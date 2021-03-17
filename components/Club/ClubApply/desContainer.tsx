import * as S from "./styles";

import CheckItem from "../ClubTable/CheckItem";

export default function DesContainer(e : any) {
  return (
    <S.SmallDesCont>
      <S.Ment>{e.ment} </S.Ment>
      <CheckItem />
    </S.SmallDesCont>
  );
}