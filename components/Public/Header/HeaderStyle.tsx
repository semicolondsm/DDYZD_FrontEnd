import styled from 'styled-components';

const Header = styled.header`
width:100%; 
height:120px;
background-color:white; 
`
const TopHeader = styled.div`
height:50%;
background-color:#350871;
display:flex;
align-items:center;
padding:0 10%;
a{
    text-decoration:none;
    font-size:1.5vmin;
    color:white;
    padding:0 1%;
}
img{
    width:60px;
    height:60px;
}
`

const BottomHeader = styled.div`
padding:0 10%;
height:50%;
border-bottom:1px solid #DBDBDB;
display:flex;
align-items:center;
justify-content:space-between;
div{
    align-items:center;
    display:flex;   
    h3{
        font-size:1.7vmin;  
        font-weight:500;
        padding:0px 1%;
    }
    a{
        text-decoration:none;
        font-size:1.3vmin;
        padding:0px 1.5%;
        cursor: pointer;
        :hover{
            color:tomato;
        }
    }
    :nth-of-type(2){
        a{
            color:#545454;
            padding:0 3%;
            border-right:1px solid #C8C8C8;
            :last-child{
                border:none;
            }
        }
    }
}
`

export{
    Header,
    TopHeader,
    BottomHeader
}