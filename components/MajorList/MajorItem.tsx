import * as S  from './styles'

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
    const {imgSrc, header, description} = props

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
                        <S.RadiusButton>D-3</S.RadiusButton>
                        <S.RadiusButton active={true}>신청하기</S.RadiusButton>
                    </S.ButtonsWrapper>
                    <S.IconWrapper>
                        <S.Icon src={`${process.env.NEXT_PUBLIC_URL}/file/${imgSrc}`} />
                    </S.IconWrapper>
                    <S.IntroWrapper>
                        {description}
                        <S.FieldIconWrapper>

                        </S.FieldIconWrapper>
                    </S.IntroWrapper>
                </div>
            </S.ItemWrapper>
    )
}

export default MajorItem