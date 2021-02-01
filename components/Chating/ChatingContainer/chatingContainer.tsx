import * as s from './styles'

export default function ChatingContainer(){
    return(
        <>
        <s.Background>
            <s.ChagingHeader>
                <s.HeaderDetail>
                    <s.Wrapper>
                        <s.ClubProfile src="https://t1.daumcdn.net/cfile/blog/2455914A56ADB1E315"></s.ClubProfile>
                        <span>동아리 이름</span>
                    </s.Wrapper>
                    <s.I>i</s.I>
                </s.HeaderDetail>
            </s.ChagingHeader>
            <s.ClubIntro>
                <s.ClubProfile src="https://t1.daumcdn.net/cfile/blog/2455914A56ADB1E315"></s.ClubProfile>
                <h3>동아리 이름</h3>
                <s.ClubText>
                    <li>동아리 소개 동아리 소개 동아리 소개 동아리 소개</li>
                    <li>동아리 자랑 동아리 자랑 동아리 자랑 동아리 자랑</li>
                </s.ClubText>
                <s.Line></s.Line>
            </s.ClubIntro>
            <s.ChatingInputWrapper>
                <s.ChagtingInput placeholder="동아리 이름 1에 메세지 입력"></s.ChagtingInput>
                <s.SubButton>
                    <button>신청하기</button>
                </s.SubButton>
            </s.ChatingInputWrapper>
        </s.Background>
        </>
    )
}