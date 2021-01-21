import styled from "styled-components"
import {color} from "../../../../style"
export const ModalContainer = styled.div`
width: 64%;
height:698px;
background-color:white;
position:absolute;
z-index:50;
margin-left:16%;
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