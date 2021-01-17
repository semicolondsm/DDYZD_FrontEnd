import * as S from './styles'
import MajorItem from './MajorItem'

const MajorList = () => {
    return (
        <S.BodyWrapper>
            <S.Wrapper>
                <MajorItem max={7} now={0} />
                <MajorItem max={7} now={1} />
                <MajorItem max={7} now={2} />
                <MajorItem max={7} now={3} />
                <MajorItem max={7} now={4} />
                <MajorItem max={7} now={5} />
                <MajorItem max={7} now={6} />
            </S.Wrapper>
        </S.BodyWrapper>
    )
}

export default MajorList