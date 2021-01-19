import styled from 'styled-components';

const Header = styled.header`
width:100%; 
background-color:white; 
min-width: 1500px;
`
const TopHeader = styled.div`
height: 60px;
/* #350871" */
background-color: ${(props)=>props.color=="purple"?"#350871":props.color=="white"?"white":"#350871"};
display:flex;
align-items:center;
padding:0 250px;
border-bottom:1px solid #C8C8C8;
a{
    text-decoration:none;
    font-size:16px;
    color:${(props)=>props.color=="white"?"black":props.color=="purple"?"white":"white"};
    display: flex;
    align-items: center;
}
`

const BottomHeader = styled.div`
padding:0 250px;
height: 60px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:white;
ul{
    align-items:center;
    padding: 0;
    margin: 0;
    display:flex;  
    list-style: none; 
    h3{
        font-size: 16px;  
        font-weight:500;
        margin: 0;
        margin-left: 15px;
        margin-right: 10px;
    }
    li{
        text-decoration:none;
        font-size: 14px;
        margin-left: 20px;
        cursor: pointer;
        :hover{
            color:tomato;
        }
    }
    
}
`



export{
    Header,
    TopHeader,
    BottomHeader,
}