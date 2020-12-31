import styled,{css} from 'styled-components';

const BoxCover = styled.div`
width:360px;
height:600px;
`

const Container = styled.div`
width:100%;
height:100%;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
div{
    :first-child{ /* 물품 신청하기 */
        width:320px;
        margin-top:20px;
        display:flex;
        a{
            font-size:20px;
            text-decoration:none;
            color:black;
            font-weight:bold;
        }
        div{
            width:38px;
            height:24px;
            border:1px solid #C8C8C8;
            border-radius:12px;
            margin-left:10px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#C8C8C8;
            font-weight:bold;
        }
    }

    :nth-of-type(2){
        width:300px;
        margin-top:10px;
        display:flex;
        align-items:center;
        a{
            text-decoration:none;
            color:black;
            font-weight:bold;
            font-size:18px;
        }
        div{
            width:18px;
            height:18px;
            background-color:#713EFF;
            border-radius:80%;
            margin-left:5px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            font-size:11px;
        }
    }

    :nth-of-type(3){ /* 물품명 */
        width:300px;
        margin-top:10px;
        display:flex;
        align-items:center;
        a{
            text-decoration:none;
            color:black;
            font-weight:bold;
            font-size:18px;
        }
        div{
            width:18px;
            height:18px;
            background-color:#713EFF;
            border-radius:80%;
            margin-left:5px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            font-size:11px;
        }
    }

    :nth-of-type(4){
        width:300px;
        margin-top:10px;
        display:flex;
        align-items:center;
        a{
            text-decoration:none;
            color:black;
            font-weight:bold;
            font-size:18px;
        }
    }
    :nth-of-type(5){
        width:300px;
        margin-top:10px;
        display:flex;
        align-items:center;
        a{
            text-decoration:none;
            color:black;
            font-weight:bold;
            font-size:18px;
        }
    }

}

select{
    width:320px;
    height:34px;
    margin-top:10px;
    border:1.7px solid #C8C8C8;
    outline:none;
    color:gray;
}

input{ /* 물품 링크 입력 */
            width:300px;
            height:30px;
            background-color:#F5F5F5;
            border:none;
            margin-top:5px;
            outline:none;
            padding: 0 10px;
            color:black;
            font-weight:bold;
}
`
const line = styled.section`
width:320px;
height:1px;
background-color:#C8C8C8;
margin-top:10px;
`
const ItemName = styled.section`
            width:300px;
            background-color:#F5F5F5;
            border:none;
            margin-top:5px;
            outline:none;
            padding: 8px 10px;
            color:black;
            font-weight:bold;
            font-size:13px;
            overflow-x:scroll;
            ::-webkit-scrollbar{
                display:none;
            }
`

const ItemCount = styled.article`
width:320px;
height:34px;
margin-top:10px;
display:flex;
justify-content:space-between;
align-items:center;
section{
    :first-child{
        margin-top:0px;
        padding:none;
        width:120px;
        height:100%;
        display:flex;
        div{
            width:54px;
            height:32px;
            border-collapse:collapse;
            border-top:1px solid #C8C8C8;
            border-bottom:1px solid #C8C8C8;
            padding:none;
            display:flex;
            justify-content:center;
            align-items:center;
            color:black;
        }
        button{
            width:34px;
            height:34px;
            border-collapse:collapse;
            border:1px solid #C8C8C8;
            background-color:transparent;
            font-size:1.6rem;
            color:#C8C8C8;
            outline:none;
            cursor: pointer;
            transition:0.5s;
            :hover{
                background-color:#C8C8C8;
                color:white;
            }
        }
    }
}
`
const ApplyButton = styled.button`
width:320px;
height:50px;
margin-top:24px;
color:white;
background-color:#350871;
border:none;    
font-size:18px;
`

export{
    Container,
    BoxCover,
    line,
    ItemName,
    ItemCount,
    ApplyButton
}