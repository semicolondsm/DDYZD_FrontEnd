import React, { useContext, useEffect, useState } from 'react';
import * as h from './styles'
import Link from "next/link"
import ListIco from './ListIco';

import UserContext from '@/context/user';
import { setState } from '@/context/context';
/**야야 */
function Header({color} : {color:string}){
    const [scroll, setScroll] = useState<number>(0);
    const { user_state, setUserState } = useContext(UserContext);
    const [toggle,setToggle] = useState<boolean>(true);
    const dispatch = setState();
    useEffect(()=>{
        window.onscroll=()=>setScroll(window.scrollY);
        localStorage.userCache && setUserState(JSON.parse(localStorage.userCache))
    },[])
    const logout =()=>{
        alert("로그아웃 되었습니다.")
        localStorage.clear()
        window.location.href="/"  
    }
    
    const ModalOn=()=>{
        setToggle(!toggle)
        if(toggle) dispatch({type:"SET_MODAL",name:"mainModal"})
        else dispatch({type:"SET_MODAL",name:""})
    }

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
                    <div onClick={ModalOn} style={{cursor:"pointer"}}><ListIco></ListIco></div>
                    <h3 onClick={ModalOn} style={{cursor:"pointer"}}>전체 카테고리</h3>
                    <li><Link href="/majorlist"><a>동아리 신청</a></Link></li>
                    <li onClick={()=>alert("개발중")}>동아리 물품 신청</li>
                    <li>공지사항</li>
                </ul>
                <ul>
                    {
                        user_state?
                            <><li><Link href={`/profile?id=${user_state.gcn}`}><a>{user_state?.name}</a></Link></li><li onClick={logout}>로그아웃</li></>
                        :<li onClick={()=>window.location.href="/login"}>로그인</li>
                    }
                    <li>고객센터</li>
                    
                </ul>
            </h.BottomHeader>
        </h.Header>
        </div>
    )
}

export default Header;
