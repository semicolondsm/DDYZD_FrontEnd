import React from 'react';
import * as h from './HeaderStyle'

function Header(){
    return(
        <h.Header>
            <h.TopHeader>
                <a href="">대동여지도</a>
            </h.TopHeader>
            <h.BottomHeader>
                <div style={{width:"70%"}}>
                    <h3>전체 카테고리</h3>
                    <a>동아리 소개</a>
                    <a>동아리 신청</a>
                    <a>동아리 게시물</a>
                    <a>동아리 물품 신청</a>
                    <a>공지사항</a>
                </div>
                
                <div style={{width:"20%"}}>
                    <a href="">이명호 님</a>
                    <a href="">로그아웃</a>
                    <a href="">고객센터</a>
                </div>
            </h.BottomHeader>
        </h.Header>
    )
}

export default Header;