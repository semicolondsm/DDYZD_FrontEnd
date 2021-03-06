import styled from "styled-components"
export const Wrapper=styled.div`
    position: relative;
`
export const BannerWrapper=styled.div`
    cursor: pointer;
    & > img{
        width: 100%;
        height: 300px;
        min-height: 300px;
        object-fit: cover;
    }
    & > div{
        position: absolute;
        font-weight: 300;
        font-size: 14px;
        padding: 1px 10px;
        background: #350871;
        top: 0;
        left: 0;
        color: white;
    }
`
export const InfoWrapper=styled.div`

`
export const Center=styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & img{
        cursor: pointer;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #c8c8c8;
    }
    & > div > div{
        position: absolute;
    }
    & p {
        font-size: 17px;
        border: none;
        display: inline-block;
        text-align: center;
        & input{
            font-size: 13px;
            color: #333;
            cursor: pointer;
            width: 300px;
            text-align: center;
            border: none;
        }
    }
`