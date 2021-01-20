import * as S  from './styles'

interface propsType {
    max: number;
    now: number;
    className: string;
    imgSrc?: string;
    header: string;
    subHeader: string;
    description: string;
}

const MajorItem = (props: propsType) => {
    const {imgSrc, header, subHeader, description} = props

    return (
            <S.ItemWrapper max={props.max} now={props.now}>
            <div className={props.className}>
                <S.PurpleBack />
                <S.PointButton></S.PointButton>
                <S.ItemImg src={imgSrc} />
                <S.ItemFontWrapper>
                    <S.ItemHeader>{header}</S.ItemHeader>
                    <S.ItemSubHeader>{subHeader}</S.ItemSubHeader>
                    <S.ItemDesWrapper>
                        <S.ItemDes>{description}</S.ItemDes>
                    </S.ItemDesWrapper>
                </S.ItemFontWrapper>
        </div>
            </S.ItemWrapper>
    )
}

export default MajorItem