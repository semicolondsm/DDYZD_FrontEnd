import styled from 'styled-components'
import {color} from '@/style/index'

export const Background = styled.div`
width:100%;
height:100%;
background-color:white;
`

export const ChagingHeader = styled.div`
width:100%;
height:81px;
border:1px solid ${color.grey300};
box-shadow:0px 3px 3px #00000029;
display:flex;
justify-content:center;
align-items:center;
img{
    width:50px;
    height:50px;
}
`

export const I = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
color:${color.grey300};
border:2px solid ${color.grey300};
border-radius:80%;
font-weight:bold;
font-size:20px;
`

export const HeaderDetail = styled.div`
width:85%;
display:flex;
align-items:center;
justify-content:space-between;
`

export const Wrapper = styled.div`
display:flex;
align-items:center;
font-size:18px;
font-weight:bold;
width:200px;
span{
    margin-left:10%;
}
`

export const ClubIntro = styled.div`
width:100%;
padding:3% 0;
display:flex;
flex-direction:column;
align-items:center;
h3{
    margin-top:10px;
    font-size:18px;
    font-family:Noto Sans CJK KR;
}
`

export const ClubProfile = styled.img`
width:60px;
height:60px;
border-radius:80%;
margin-top:0px;
`

export const ClubText = styled.ul`
color:${color.grey600};
font-size:14px;
margin-top:7px;
`

export const Line = styled.div`
width:90%;
border-bottom:1px solid ${color.grey300};
margin-top:50px;
`

export const ChatingInputWrapper = styled.div`
width:100%;
height:70px;
bottom:0;
border:none;
position:absolute;
display:flex;
align-items:center;
`

export const ChagtingInput = styled.input`
width:84%;
border-radius:15px;
background-color:${color.grey100};
padding: 0 25px;
height:40px;
border:none;
margin-left:10px;
color:${color.grey400};
font-size:15px;
`

export const SubButton = styled.div`
background: transparent linear-gradient(180deg, #FFE874 0%, #7B1ACF 66%, #713EFF 100%) 0% 0% no-repeat padding-box;
width:13%;
height:40px;
border-radius:15px;
margin-left:1.5%;
border:none;
display:flex;
justify-content:center;
align-items:center;
button{
    width:96%;
    height:85%; 
    background-color:${color.purple300};
    border-radius:15px;
    border:none;
    color:white;
}
`