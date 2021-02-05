import styled from 'styled-components';
import {color} from '../../../style/index'



const SubHeader = styled.div` 
background-color:white;
border-top:1px solid ${color.grey300};
min-width: 1500px;
`
const Tip = styled.div`
    width:38px;
    height:24px;
    border-radius:24px;
    border:1px solid ${color.grey300};
    color:#A4A4A4;
    display:flex;
    justify-content:center;
    align-items:center; 
    font-size:1.5vmin;
    margin-left:1%;
`
const SubHeaderTitle = styled.div`
display:flex;
height:80px;
border-bottom:1px solid ${color.grey300};
align-items:center;
padding: 0 250px;
& p{
    font-size: 22px;
    & b{
        font-size: 26px;
        font-weight: bold;
        font-family:Arial, Helvetica, sans-serif;
    }
}
`
const ItemState = styled.ul`
display:flex;
height: 60px;
padding: 0;
margin: 0;
list-style : none;
padding: 0 250px;
align-items: center;

li{
    margin-right: 40px;
    font-size: 16px;    
    
}
`

export{
    SubHeader,
    SubHeaderTitle,
    ItemState,
    Tip
}