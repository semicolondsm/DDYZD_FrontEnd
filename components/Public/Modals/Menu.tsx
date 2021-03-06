import * as s from './styles'
import club from '@/utils/api/club'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const Modal =()=>{
    const [data,setData] = useState<any>([]);
    const router = useRouter();
    const replacePage =(e : any)=>{
        router.push(`clubinfo?id=${e.target.className}`) 
    }
    useEffect(()=>{
        club.getClubList()
        .then((res)=>{
            setData(res.data);
        })
    },[])
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
                    <s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "웹" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail>
                    <s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "앱" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail>
                    <s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "임베디드" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail>
                    <s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "게임" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail>
                    <s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "인공지능" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail>
                    <s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "정보보안" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail>
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
                    <s.Detail><s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "교과목" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail></s.Detail>
                    <s.Detail><s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "전공과목" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail></s.Detail>
                    <s.Detail><s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "스포츠" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail></s.Detail>
                    <s.Detail><s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "예술" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail></s.Detail>
                    <s.Detail><s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "교내활동" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail></s.Detail>
                    <s.Detail><s.Detail>{data.map((res : any)=>{return res.clubtag[0] == "기타" && <a onClick={replacePage} className={res.clubid} key={res.clubid}>{res.clubname}</a>})}</s.Detail></s.Detail>
                </s.Flex>
            </s.Category>
        </s.ModalContainer>
    )
}

export default Modal;