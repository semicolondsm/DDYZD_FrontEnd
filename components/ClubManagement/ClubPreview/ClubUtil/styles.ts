import styled from "styled-components"

export const Wrapper=styled.div`
    margin-top: 80px;
    width: 100%;
    padding: 5px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: #ffffff;
`
export const UtilWrapper=styled.ul`
    display: flex;
    width: 100% ;
    align-items: center;
    padding: 0 5%;
    justify-content: space-between;
    & div{
        display: flex;
    }
    & li{
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 13px;
        & p{
            margin-left: 5px;
        }
    }
    & div > li {
        margin-left: 20px;
    }
`