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
padding:0 16%;
min-width:800px;
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
padding:0 16%;
height:50%;
display:flex;
align-items:center;
justify-content:space-between;
min-width:800px;
background-color:white;
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

const SubHeader = styled.header`
width:100%;
height:120px;  
background-color:white;
border-top:1px solid #DBDBDB;
`

const SubHeaderTitle = styled.div`
width:100%;
display:flex;
height:60%;
border-bottom:1px solid #C8C8C8;
align-items:center;
div{
    :first-child{
        display:flex;
        align-items:center;
        margin-left:17%;
        width:50%;
        a{
            text-decoration:none;
            font-weight:bold;
            font-family:Arial, Helvetica, sans-serif;
            font-size:2.1vmin;
            color:black;
            :nth-of-type(2){
                font-weight:500;
                margin-left:1%;
            }
        }
        div{
            width:38px;
            height:24px;
            border-radius:24px;
            border:1px solid #C8C8C8;
            color:#A4A4A4;
            display:flex;
            justify-content:center;
            align-items:center; 
            font-size:1.5vmin;
            margin-left:1%;
        }
    }
}
`
const ItemState = styled.div`
width:100%;
display:flex;
height:40%;
align-items:center; 
a{
    margin-left:4%;
    font-size:1.5vmin;    
    :first-child{
        margin-left:16.5%;
    }
}
`

export{
    Header,
    TopHeader,
    BottomHeader,
    SubHeader,
    SubHeaderTitle,
    ItemState
}