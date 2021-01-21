import React, { useEffect, useState } from 'react';
import * as h from './styles'
import Link from "next/link"
import ListIco from './ListIco';
function Header({color} : {color:string}){
    const [scroll, setScroll] = useState<number>(0);
    useEffect(()=>{
        window.onscroll=()=>setScroll(window.scrollY);
    },[])
    return(
        <div>
        <h.Header>
            <h.TopHeader state={scroll} color={color}>
                <Link href="/">
                    <a><img src={color=="white" ? "https://eungyeole.s3.ap-northeast-2.amazonaws.com/logoblack.png" : "https://eungyeole.s3.ap-northeast-2.amazonaws.com/logowhite.png"} width={25} height={25}></img>대동여지도</a>
                </Link>
            </h.TopHeader>
            <h.BottomHeader>
                <ul>
                    <ListIco></ListIco>
                    <h3>전체 카테고리</h3>
                    <li>동아리 소개</li>
                    <li>동아리 신청</li>
                    <li>동아리 게시물</li>
                    <li>동아리 물품 신청</li>
                    <li>공지사항</li>
                </ul>
                <ul>
                    <li>이명호 님</li>
                    <li>로그아웃</li>
                    <li>고객센터</li>
                </ul>
            </h.BottomHeader>
        </h.Header>
        </div>
    )
}

export default Header;