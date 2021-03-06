import styled from "styled-components"
import {color} from "../../../style"
export const ModalContainer = styled.div`
width: 64%;
height:698px;
background-color:white;
position:absolute;
z-index:50;
margin-left:13%;
border-top:1px solid ${color.grey400};
border-bottom:1px solid ${color.grey400};
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
border-top:2px solid ${color.grey300};
border-bottom:2px solid ${color.grey300};
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
color:${color.grey400};
`

export const FeedModalCover = styled.div`
width:100%;
height:100%;
position:fixed;
top:0;
z-index:200;
background-color:rgb(0,0,0,0.3);
display:flex;
justify-content:center;
align-items:center;
`

export const FeedModalContainer = styled.div`
width:20%;
background:white;
border-radius:15px;
`

export const FeedModalMenu = styled.div`
color:${color.grey400};
font-size:2vmin;
`

export const Menu = styled.div`
height:20%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
border-bottom:1px solid ${color.grey200};
padding:15px 0;
font-size:1.5vmin;
cursor: pointer;
:last-child{
    border-bottom:none;
}
:hover{
    background:rgb(190,190,190,0.1);
}
`