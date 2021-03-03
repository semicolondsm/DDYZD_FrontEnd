import * as S from "./styles";

interface propsType {
  max: number;
  now: number;
  className: string;
  imgSrc?: string;
  header: string;
  description: string;
  tags: string[];
}

const MajorItem = (props: propsType) => {
  const { imgSrc, header, description } = props;

  return (
    <S.ItemWrapper max={props.max} now={props.now}>
      <div className={props.className}>
        <S.PurpleBack />
        <S.PointButton></S.PointButton>
        <S.ItemImg src={imgSrc} />
        <S.ItemFontWrapper>
          <S.ItemHeader>{header}</S.ItemHeader>
          <S.ItemSubHeader>{description}</S.ItemSubHeader>
        </S.ItemFontWrapper>
        <S.ButtonsWrapper>
          <S.RadiusButton active={true}>신청하기</S.RadiusButton>
        </S.ButtonsWrapper>
        <S.IconWrapper>
          <S.Icon src={imgSrc} />
        </S.IconWrapper>
        <S.IntroWrapper>
          안녕하세요 PICK입니다.
          <br />
          저희 PICK에서 1학년 멤버를 <br />
          모집합니다.
          <S.FieldIconWrapper></S.FieldIconWrapper>
        </S.IntroWrapper>
      </div>
    </S.ItemWrapper>
  );
};

export default MajorItem;
