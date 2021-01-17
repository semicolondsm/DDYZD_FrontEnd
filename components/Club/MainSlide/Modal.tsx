import * as s from './MainSlideStyle'

const Modal =()=>{
    return(
        <s.ModalContainer>
            <s.ModalTitle>전체 카테고리</s.ModalTitle>
            <s.Category>
                <s.CategoryTitle>
                    <s.CategoryBox>웹</s.CategoryBox>
                    <s.CategoryBox>앱</s.CategoryBox>
                    <s.CategoryBox>임베디드</s.CategoryBox>
                    <s.CategoryBox>게임</s.CategoryBox>
                    <s.CategoryBox>인공지능</s.CategoryBox>
                    <s.CategoryBox>정보보안</s.CategoryBox>
                </s.CategoryTitle>
                <s.Flex>
                    <s.Detail><a>DBSG</a> <a>DMS</a> <a>FLOSIVA</a> <a>LAPIO</a> <a>SEMICOLON;</a> <a>UP</a> <a>UNDEFINED</a> <a>시나브로</a></s.Detail>
                    <s.Detail><a>DMS</a> <a>GRAM</a> <a>SEMICOLON;</a> <a>UNDEFINED</a> <a>덧셈</a></s.Detail>
                    <s.Detail><a>ESD</a><a>NONAMED</a><a>VCC</a></s.Detail>
                    <s.Detail><a>GG</a><a>TEAM QSS</a></s.Detail>
                    <s.Detail><a>모딥</a></s.Detail>
                    <s.Detail><a>INFO</a></s.Detail>
                </s.Flex>
            </s.Category>

            <s.Category>
                <s.CategoryTitle>
                    <s.CategoryBox>교과목</s.CategoryBox>
                    <s.CategoryBox>전공과목</s.CategoryBox>
                    <s.CategoryBox>스포츠</s.CategoryBox>
                    <s.CategoryBox>예술 ㆍ 창의 ㆍ 교양</s.CategoryBox>
                    <s.CategoryBox>교내활동</s.CategoryBox>
                    <s.CategoryBox>기타 </s.CategoryBox>
                </s.CategoryTitle>
                <s.Flex>
                    <s.Detail><a>ENGLISH MOMENTUM</a> <a>통계의 미학</a> <a>융합과학</a></s.Detail>
                    <s.Detail><a>AVOCAT</a> <a>DMS</a> <a>ENTRY</a> <a>PICK</a> <a>SEMICOLON;</a></s.Detail>
                    <s.Detail><a>농구</a><a>배드민턴 A / B / C</a><a>탁구사랑 1 / 2</a></s.Detail>
                    <s.Detail><a>음악독서일기</a><a>나를 사랑하게 되는 명상</a><a>마소리딩</a><a>명화그리기 1 / 2</a><a>사서탐독 1 / 2</a></s.Detail>
                    <s.Detail><a>또래상담부</a><a>방송부</a><a>신문부</a><a>가온누리봉사부</a><a>체인지메이커</a></s.Detail>
                    <s.Detail><a>영화 감상부</a><a>고사성어부</a></s.Detail>
                </s.Flex>
            </s.Category>
        </s.ModalContainer>
    )
}

export default Modal;