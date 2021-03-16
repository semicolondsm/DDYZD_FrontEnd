import * as S from "./styles";
import CheckItem from "../ClubTable/CheckItem";

function ClubItemApply() {
  return (
    <S.BoxCover>
      <S.Container>
        <S.DesCont>
          <S.ApplyItem>물품 신청하기</S.ApplyItem>
          <S.Tip>TIP</S.Tip>
        </S.DesCont>
        <S.line></S.line>
        <S.SmallDesCont>
          <S.Ment>물품 상태 </S.Ment>
          <CheckItem />
        </S.SmallDesCont>
        <S.ItemInput type="text" name="" id="" />
        <S.SmallDesCont>
          <S.Ment>물품명 </S.Ment>
          <CheckItem />
        </S.SmallDesCont>
        <S.ItemInput type="text" name="" id="" />
        <S.SmallDesCont>
          <S.Ment>옵션 선택</S.Ment>
        </S.SmallDesCont>
        <S.Select name="" id="">
          <option value="">안녕하세요</option>
        </S.Select>
        <S.SmallDesCont>
          <S.Ment>수량 선택</S.Ment>
        </S.SmallDesCont>
        <S.ItemCount>
          <S.ConutDiv>
            <S.StatusBtn>-</S.StatusBtn>
            <S.Status>0</S.Status>
            <S.StatusBtn>+</S.StatusBtn>
          </S.ConutDiv>
          <h4>총 0개</h4>
          <h3>120000 원</h3>
        </S.ItemCount>
        <S.ApplyButton>신청하기</S.ApplyButton>
      </S.Container>
    </S.BoxCover>
  );
}

export default ClubItemApply;
