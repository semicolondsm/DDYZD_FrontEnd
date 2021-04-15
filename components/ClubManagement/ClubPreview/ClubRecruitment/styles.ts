import styled from "styled-components"
export const Wrapper=styled.div`
    & > div{
        background: white;
        max-width: 630px;
        box-shadow: 0px 5px 5px #00000029;
        border: 1px solid #F5F5F5;
        margin-bottom: 35px;
        padding: 20px;
        margin: 15px auto;
        & > input{
            margin-top: 10px;
        }
    }
    
`
export const HeaderWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const RecuitmentDay=styled.p`
    font-size: 14px;
    color: #333;
`

export const TagList=styled.div`
    display:flex;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
    & span{
        padding: 4px 15px;
        border-radius: 30px;
        font-size: 12px;
        background: #eee;
        color: #767676;
        margin-right: 5px;
        margin-bottom: 10px;
        cursor: pointer;
    }
`