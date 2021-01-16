import React, { useEffect } from 'react';
import * as h from './HeaderStyle'

function Header(e:any){
    useEffect(()=>{
        console.log(e.e)
    })
    return(
        <div>
        <h.Header>
            <h.TopHeader style={{backgroundColor:(e.e==1)?"white":"#350871"}}>
                <a style={{color:(e.e==1)?"black":"white"}}>대동여지도</a>
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
                <div style={{width:"20%", marginRight:"12%"}}>
                    <a>이명호 님</a>
                    <a>로그아웃</a>
                    <a>고객센터</a>
                </div>
            </h.BottomHeader>
        </h.Header>
        </div>
    )
}

export default Header;