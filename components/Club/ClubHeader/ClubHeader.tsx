import React from 'react';
import * as h from './ClubHeaderStyle'

function Header(){
    return(
        <div>
        <h.SubHeader>
            <h.SubHeaderTitle>
                <div>
                    <a>SEMICOLON;</a><a>의 물품리스트</a>  
                    <div>TIP</div>
                </div>      
            </h.SubHeaderTitle>
            <h.ItemState>
                <a>전체 (3개)</a>
                <a>승인 완료 (2개)</a>
                <a>신청 거절 (1개)</a>
            </h.ItemState>
        </h.SubHeader>
        </div>
    )
}

export default Header;
