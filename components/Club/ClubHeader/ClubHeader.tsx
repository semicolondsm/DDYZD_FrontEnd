import React from 'react';
import * as S from './styles'

function Header(){
    return(
        <>
            <S.SubHeader>
                <S.SubHeaderTitle>
                    <p><b>SEMICOLON;</b>의 물품리스트</p>  
                    <S.Tip>TIP</S.Tip>
                </S.SubHeaderTitle>
                <S.ItemState>
                    <li>전체 (3개)</li>
                    <li>승인 완료 (2개)</li>
                    <li>신청 거절 (1개)</li>
                </S.ItemState>
            </S.SubHeader>
        </>
    )
}

export default Header;
