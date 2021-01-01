import * as S from './ApplyStyle';

function ClubItemApply(){
    return(
        <S.BoxCover>
            <S.Container>
                <div>
                    <a>물품 신청하기</a>
                    <div>TIP</div>
                </div>
                <S.line></S.line>
                <div>
                    <a>물품 상태</a>
                    <div>✔</div>
                </div>
                <input type="text" name="" id=""/>
                <div>
                    <a>물품명</a>
                    <div>✔</div>
                </div>
                <S.ItemName>게이밍 마우스 2020</S.ItemName>
                <div>
                    <a>옵션 선택</a>
                </div>
                <select name="" id="">
                    <option value="">안녕하세요</option>
                </select>
                <div>
                    <a>수량 선택</a>
                </div>
                <S.ItemCount>
                    <section>
                        <button>-</button>
                        <div>0</div>
                        <button>+</button>
                    </section>
                    <h4>총 0개</h4>
                    <h3>120000 원</h3>
                </S.ItemCount>
                <S.ApplyButton>신청하기</S.ApplyButton>
            </S.Container>
        </S.BoxCover>
    )
}

export default ClubItemApply;