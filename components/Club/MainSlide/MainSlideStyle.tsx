import styled from 'styled-components'

export const SlideContainer = styled.div`
width:100%;
height:700px;
display:flex;
min-width:1000px;
background-color:gray;
::-webkit-scrollbar{
    display:none;   
}
` // 동아리 홍보사진 div

export const SlideUnderBar = styled.div`
width:100%;
height:96px;
border-bottom:1px solid #DBDBDB;
min-width:1000px;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
` // 아래 동아리 프로필 div

export const MenuBar = styled.div`
width:5%;
padding: 0 3% 0 1%;
height:700px;
position:absolute;
background-color:rgb(0,0,0,0.5);
margin-left:16%;
color:white;
min-width:100px;
display:flex;
flex-direction:column;
z-index:30;
`

export const TitleMenu = styled.h3`
font-size:1.7vmin;
font-weight:500;
font-family:sans-serif;
padding:14% 0 3% 0;
`

export const DetailMenu = styled.a`
font-size:1.4vmin;
font-weight:500;
font-family:sans-serif;
padding:13% 0;
`

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
height:700px;
position:absolute;
background-color:blue;
display:flex;
transition:1s;
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
border:2px solid #707070;
display:flex;
justify-content:center;
align-items:center;
margin-top:7%;
img{
    width:90%;
    height:90%;
    border-radius:80%;
    object-fit:cover;
}
`

export const ProfileLine = styled.div`
width:100%;
height:2px;
background-color:#C8C8C8;
margin-top:2%;
`