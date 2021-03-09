import * as s from './styles'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useMenuDispatch, useMenuState } from '@/context/menuProvider';
import { getMenu } from '@/context/actions/menuActions';

const Menu =({name} : any)=>{
    const [data,setData] = useState<any>([]);
    const router = useRouter();
    const dispatch = useMenuDispatch();
    const state: any=useMenuState();
    const replacePage =(e : any)=>{
        router.push(`clubinfo?id=${e.target.className}`) 
    }
    useEffect(()=>{
        state.MenuList.data || getMenu(dispatch)
    },[])
    useEffect(()=>{
        state.MenuList.data && setData(state.MenuList.data);
    },[state])
    return (
        <s.Detail>
            {data.map((res : any)=>
            {const a = res.clubtag.find((e:string)=>e === name); return a === name && 
                <a 
                    onClick={replacePage} 
                    className={res.clubid} 
                    key={res.clubid}>
                    {res.clubname}
                </a>
            }
            )}
        </s.Detail>
    )
}

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
                    <Menu name="웹"/>
                    <Menu name="앱"/>
                    <Menu name="임베디드"/>
                    <Menu name="게임"/>
                    <Menu name="인공지능"/>
                    <Menu name="정보보안"/>
                </s.Flex>
            </s.Category>

            <s.Category>
                <s.CategoryTitle>
                    <s.CategoryBox>교과목</s.CategoryBox>
                    <s.CategoryBox>전공과목</s.CategoryBox>
                    <s.CategoryBox>스포츠</s.CategoryBox>
                    <s.CategoryBox>예술 ㆍ 창의 ㆍ 교양</s.CategoryBox>
                    <s.CategoryBox>교내활동</s.CategoryBox>
                    <s.CategoryBox>창체 </s.CategoryBox>
                </s.CategoryTitle>
                <s.Flex>
                    <Menu name="교과목"/>
                    <Menu name="전공과목"/>
                    <Menu name="스포츠"/>
                    <Menu name="자율"/>
                    <Menu name="위원회"/>
                    <Menu name="창체"/>
                </s.Flex>
            </s.Category>
        </s.ModalContainer>
    )
}

export default Modal;