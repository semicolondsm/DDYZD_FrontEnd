import styled from "styled-components"
import { color } from "../../../style"
export const MenuBar = styled.ul`
padding: 0 83px 0 25px;
height:700px;
position:absolute;
background-color:rgb(0,0,0,0.5);
margin-left:250px;
color:white;
min-width:100px;
display:flex;
flex-direction:column;
z-index:30;
min-width:100px;
`

export const TitleMenu = styled.h3`
font-size:17px;
font-weight:500;
font-family:sans-serif;
padding:20px 0 4px 0;
`

export const DetailMenu = styled.li`
font-size:14px;
font-weight:500;
font-family:sans-serif;
padding:11px 0;
`
export const SlideContainer = styled.div`
width:100%;
height:700px;
display:flex;
min-width:1000px;
background-color:gray;
position:relative;
overflow:hidden;
::-webkit-scrollbar{
    display:none;   
}
` // 동아리 홍보사진 div

export const SlideUnderBar = styled.div`
width:100%;
height:96px;
border-bottom:1px solid ${color.grey300};
min-width:1000px;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
` // 아래 동아리 프로필 div


export const AllowContainer = styled.div`
width:100%;
height:700px;
display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
`

export const Allow = styled.div`
width:5%;
height:20%;
font-size:5vmin;
color:white;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`

export const SlideBox = styled.div`
width:200%;
height:700px;
display:flex;
transition:1s;
min-width:1000px;
position:absolute;
`

export const Box = styled.div`
width:200%;
height:700px;
`

export const ClubProfileBox = styled.div`
width:86px;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
font-size:1.3vmin;
font-family:sans-serif;
color:black;
padding:0 1%;
a{
    padding: 3% 0;
}
`

export const ClubProfile = styled.div`
width:54px;
height:54px;
border-radius:80%;
display:flex;
justify-content:center;
align-items:center;
margin-top:7%;
border: 1px solid;
border: 2px solid transparent;
border-radius: 80%;
background-image: linear-gradient(white,white), linear-gradient(${color.grey500},${color.grey500});
background-origin: border-box;
background-clip: content-box, border-box;
img{
    cursor: pointer;
    width:90%;
    height:90%;
    border-radius:80%;
    object-fit:cover;
    background-color:white;
}
`

export const ProfileLine = styled.div`
width:100%;
height:2px;
background-color:${color.grey300};
margin-top:2%;
`

