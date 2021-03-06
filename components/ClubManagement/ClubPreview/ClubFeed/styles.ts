import styled from "styled-components"
import { color } from "../../../../style"
const maxWidth = "630px"
export const FeedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    & li{
        border-radius: 20px;
        background: white;
        max-width: ${maxWidth};
        box-shadow: 0px 5px 5px ${color.grey200};
        border: 1px solid ${color.grey100};
        margin-bottom: 35px;
        margin: 15px auto;
    }
    @media screen and (max-width: ${maxWidth}) { 
        & li{
            border-radius: 0;
            border: none;
        }
    }
`