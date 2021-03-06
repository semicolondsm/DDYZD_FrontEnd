import * as S from "./styles";
import earthIc from "@/public/images/earth";
import phonoeIc from "@/public/images/phone";

interface propsType {
  max: number;
  now: number;
  className: string;
  imgSrc?: string;
  header: string;
  tag: string[];
  description: string;
}

const MajorItem = (props: propsType) => {
  const { imgSrc, header, description, tag } = props;
  console.log(`https://api.eungyeol.live/file/${imgSrc}`);

  return (
    <S.ItemWrapper max={props.max} now={props.now}>
      <div className={props.className}>
        <S.PurpleBack />
        <S.PointButton></S.PointButton>
        <S.ItemImg src={imgSrc} />
        <S.ItemFontWrapper>
          <S.ItemHeader>{header}</S.ItemHeader>
          <S.ItemSubHeader>{description}</S.ItemSubHeader>
          <S.ItemDesWrapper>
            <S.ItemDes>{description}</S.ItemDes>
          </S.ItemDesWrapper>
        </S.ItemFontWrapper>
        <S.ButtonsWrapper>
          <S.RadiusButton active={true}>신청하기</S.RadiusButton>
        </S.ButtonsWrapper>
        <S.IconWrapper>
          <S.Icon src={`https://api.eungyeol.live/file/${imgSrc}`} />
        </S.IconWrapper>
        <S.IntroWrapper>
          {description}
          <S.IntroIcon>
            <S.FieldIconWrapper>
              {tag.map((val) => {
                if (val === "웹") {
                  return earthIc;
                } else if (val === "앱") {
                  return phonoeIc;
                } else if (val === "게임") {
                  return;
                } else if (val === "인공지능") {
                  return;
                } else if (val === "정보보안") {
                  return;
                }
              })}
            </S.FieldIconWrapper>
          </S.IntroIcon>
        </S.IntroWrapper>
      </div>
    </S.ItemWrapper>
  );
};

export default MajorItem;
