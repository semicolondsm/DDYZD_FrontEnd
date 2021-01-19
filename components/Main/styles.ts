import styled from "styled-components"
const maxWidth = "630px"
export const FeedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    & li{
        border-radius: 20px;
        background: white;
        max-width: ${maxWidth};
        box-shadow: 0px 5px 5px #00000029;
        border: 1px solid #eee;
        margin-bottom: 35px;
        margin: 15px auto;
    }
    @media screen and (max-width: ${maxWidth}) { 
        & li{
            border-radius: 0;
            border: none;
        }
    }
`
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    @media screen and (max-width: ${maxWidth}) { 
        padding: 15px 15px;
        padding-bottom: 0;
    }
    padding-bottom: 0;
    margin-bottom: 10px;
    & img{
        width: 40px;
        height: 40px;
        border: 1px solid #eee;
        border-radius: 50%;
    }
`
export const CardHeaderContent = styled.div`
    margin-left: 15px;
    width: 100%;
    font-size: 16px;
    @media screen and (max-width: ${maxWidth}) { 
        font-size: 14px;
    }
`
export const CreatedAt = styled.div`
    font-size: 14px;
    @media screen and (max-width: ${maxWidth}) { 
        font-size: 12px
    }
    color: #A4A4A4;
`
export const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    @media screen and (max-width: ${maxWidth}) { 
        font-size: 13px;
    }

`
export const CardBottom = styled.div`
    padding: 20px 25px;
    padding-top: 0;
    @media screen and (max-width: ${maxWidth}) { 
        padding: 20px 20px;
        padding-top: 0;
    }
`
export const Content = styled.div`
    padding: 0 25px;
    margin-bottom: 10px;
    @media screen and (max-width: ${maxWidth}) { 
        padding: 0px 15px;
    }
`
export const Slider = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-y: hidden;
    position: relative;
    height: 0;
    padding-bottom: 100%;
    & button{
        position: absolute;
        top: 50%;
        outline: none;
        background: none;
        border: none;
        transform: translateY(-50%);
        cursor: pointer;
    }
`
export const SliderImages = styled.div`
    display: flex;
    width: 100%;
    transition: 0.3s;
    height: 0px;
    padding-bottom: 100%;
    & img{
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        object-fit: cover;
        -webkit-user-drag: none;
    }
 `
export const Prev = styled.button`
    left: 0;
 `
export const Next = styled.button`
    right: 0;
`
export const SliderState = styled.div`
    display: flex;
    position: relative;
    bottom: 0px;
    justify-content: center;
`
export const StateButton = styled.div`
    width: 7px;
    height: 7px;
    margin-right: 4px;
    background: #A4A4A4;
    border-radius: 50%;
`
export const CardUtil = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    & svg{
        cursor: pointer;
    }
    & div{
        & svg{
            padding-right: 10px;
        }
    }
`
export const CardState = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: bold;
    color: #606670;
    margin-top: 5px;
    
    @media screen and (max-width: ${maxWidth}) { 
        font-size: 11px;
    }
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
border-bottom:1px solid #DBDBDB;
min-width:1000px;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
` // 아래 동아리 프로필 div

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
background-color:blue;
display:flex;
transition:1s;
min-width:1000px;
position:absolute;
`

export const Box = styled.div`
width:200%;
height:700px;
background-color:red;
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
background-image: linear-gradient(white,white), linear-gradient(#707070,#707070);
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
background-color:#C8C8C8;
margin-top:2%;
`

export const ModalContainer = styled.div`
width: 64%;
height:698px;
background-color:white;
position:absolute;
z-index:50;
margin-left:16%;
border-top:1px solid #A4A4A4;
border-bottom:1px solid #A4A4A4;
padding:0 2%;
`

export const ModalTitle = styled.h1`
font-size:2vmin;
color:black;
font-weight:500;
margin-top:2%;
margin-left:1%;
`

export const Category = styled.div`
width:100%;
height:41%;
margin-top:2%;
`

export const CategoryTitle = styled.div`
width:100%;
height:13%;
border-top:2px solid #C8C8C8;
border-bottom:2px solid #C8C8C8;
display:flex;
`

export const CategoryBox = styled.div`
width:calc(100%/6);
height:100%;
color:black;
font-size:1.6vmin;
display:flex;
align-items:center;
padding: 0 2%;
`

export const Detail = styled.div`
width:calc(100%/6);
height:100%;
display:flex;
flex-direction:column;
a{
    cursor: pointer;
    :hover{
        color:tomato;
    }
    :first-child{
        margin-top:6%;
    }
    padding:2% 0;
}
`

export const Flex = styled.div`
width:100%;
display:flex;
height:100%;
padding: 0 2.1%;
font-size:1.3vmin;
color:#A4A4A4;
`