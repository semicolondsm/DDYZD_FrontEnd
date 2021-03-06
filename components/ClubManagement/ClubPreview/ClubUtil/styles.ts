import styled from "styled-components"
import { ReactComponent as Recruitment } from "../../../../assets/images/recruitment.svg"
import { ReactComponent as Feed } from "../../../../assets/images/feed.svg"
import { ReactComponent as Member } from "../../../../assets/images/member.svg"

export const Wrapper=styled.div`
    margin-top: 80px;
    width: 100%;
    padding: 5px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
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
export const recruitmentIco=styled(Recruitment)`
    width: 20px;
    height: 20px;
`
export const memberIco=styled(Member)`
    width: 20px;
    height: 20px;
`
export const feedIco=styled(Feed)`
    width: 20px;
    height: 20px;
`