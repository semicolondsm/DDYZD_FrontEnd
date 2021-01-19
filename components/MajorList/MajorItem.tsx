import * as S  from './styles'

interface propsType {
    max: number;
    now: number;
    className: string;
}

const MajorItem = (props: propsType) => {
    return (
            <S.ItemWrapper max={props.max} now={props.now}>
            <div className={props.className}>
                <S.PurpleBack />
                <S.PointButton></S.PointButton>
                <S.ItemImg />
                <S.ItemFontWrapper>
                    <S.ItemHeader>PANG</S.ItemHeader>
                    <S.ItemSubHeader>웹 프로젝트 진행을 위한 웹 개발 동아리</S.ItemSubHeader>
                    <S.ItemDesWrapper>
                        <S.ItemDes>프로젝트 위주의 운영으로 자유롭고 친한 분위기 속에 진행으 ㄹ하고 있습니다</S.ItemDes>
                    </S.ItemDesWrapper>
                </S.ItemFontWrapper>
        </div>
            </S.ItemWrapper>
    )
}

export default MajorItem