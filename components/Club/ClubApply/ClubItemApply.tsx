import * as S from './styles';
import CheckItem from "../ClubTable/CheckItem"

function ClubItemApply(){
    return(
        <S.BoxCover>
            <S.Container>
                <div>
                    <p>물품 신청하기</p>
                    <div>TIP</div>
                </div>
                <S.line></S.line>
                <div>
                    <p>물품 상태 </p>
                    <CheckItem/>
                </div>
                <input type="text" name="" id=""/>
                <div>
                    <p>물품명 </p>
                    <CheckItem/>
                </div>
                <input type="text" name="" id=""/>
                <div>
                    <p>옵션 선택</p>
                </div>
                <select name="" id="">
                    <option value="">안녕하세요</option>
                </select>
                <div>
                    <p>수량 선택</p>
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