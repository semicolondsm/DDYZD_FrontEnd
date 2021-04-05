import styled from 'styled-components';
import { color } from "../../style"
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: white;
    padding-top: 10px;
    & > div{
        margin: 30px 250px;
        display: flex;
    }
    & > h2{
        margin: 0 250px;
        font-size: 23px;
        border-bottom: 1px solid #eaecef;
        padding-bottom: 10px;
    }
    & button{
        background: none;
        border: none;
        background : #350871;
        color: white;
        margin-top: 10px;   
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
`;

export const ProfilePicture = styled.div`
    margin-left: 50px;
    img {
        width: 200px;
        border-radius: 50%;
        height: 200px;
    }

`;

export const DisableBT = styled.button`
    background: #C8C8C8 !important;
    color : black !important;
`
export const ForInfo = styled.div<{ error? : boolean}>`
    font-family: 'Noto Sans KR',sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 500px;
    h2 {
        width: 100px;
        font-size: 14px;
        border-radius: 10px;
    }

    input {
        margin-top: 5px;
        border: none;
        width: 414px;
        height: 35px;
        padding: 0px 12px;
        background : #fafbfc;
        font-size: 15px;
        border: 1px solid #e1e4e8;
        border-radius: 5px;
        border-bottom: ${(props) => props.error ? "0.5px solid red !important" : ""};
    }
    textarea {
        margin-top: 5px !important;
        border: none;
        width: 414px;
        max-width: 414px;
        height: 80px;
        padding: 5px 12px;
        background : #fafbfc;
        font-size: 15px;
        border: 1px solid #e1e4e8;
        border-radius: 5px;
        border-bottom: ${(props) => props.error ? "0.5px solid red !important" : ""};
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
        border-bottom: 0.5px solid purple;
    }


`;


export const MSlideUnderBar = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
`
export const MClubProfileBox = styled.div`
width:86px;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
font-size: 12.5px;
font-family:sans-serif;
color:black;
padding:0 5px;
margin-right: 15px;
a{
    padding: 5px 0;
}
`
export const ProfileLine = styled.div`
width:100%;
height:2px;
background-color:${color.grey300};
margin-top:2%;
`
export const MSlideUnderBarContent = styled.div`
background-color:white;
display:flex;
align-items:center;
overflow-x: scroll;
::-webkit-scrollbar{
    display:none;   
}
`
export const ClubProfile = styled.div`
width: 54px;
height: 54px;
border-radius: 80%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 7%;
border-radius: 80%;
background-image: linear-gradient(white, white),
linear-gradient(${color.grey500}, ${color.grey500});
background-origin: border-box;
background-clip: content-box, border-box;
img {
    cursor: pointer;
    width: 90%;
    height: 90%;
    border-radius: 80%;
    object-fit: cover;
    background-color: white;
}
`
