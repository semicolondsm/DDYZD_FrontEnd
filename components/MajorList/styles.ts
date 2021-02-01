import { EDEADLK } from 'constants'
import styled, { css } from 'styled-components'
import { color } from '../../style'
 
export const ItemWrapper = styled.div<{max: number, now: number}>`
    width: 290px;
    height: 200px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    border: 1px solid ${color.grey300};
    border-radius: 5px;
    position: relative;
    background: white;
    transition: 0.4s width cubic-bezier(0.3, 0.3, 0.0, 1.0), 0.2s box-shadow linear, 0.4s right cubic-bezier(0.3, 0.3, 0.0, 1.0);
    overflow: hidden;
    right: 0;

    &:hover {
        width: 620px;
    }

    &:nth-child(4n):hover {
        right: 330px;
    }

    ${props => (props.now+1) % 4 != 0 && css`
        &:hover + div {
            box-shadow: none !important;
        }
    `} 

    &:hover > div > img {
        margin-left: 30px;
    }

    z-index: ${props => props.max - props.now};
`

export const ItemFontWrapper = styled.div`
    margin: 0 10px;
`

export const ItemImg = styled.img`
    width: 270px;
    height: 100px;
    margin: 10px;
    transition: 0.2s margin ease-out;
`

export const ItemHeader = styled.h2`
    font-size: 16px;
    color: black;
    letter-spacing: 0;
    margin: 0 0 3px;
` 

export const ItemSubHeader = styled.h3`
    font-weight: 500;
    font-size: 14px;
    color: ${color.grey600};
    margin: 0 0 -5px;
`

export const ItemDesWrapper = styled.div`
    margin-right: -6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 290px;
`

export const ItemDes = styled.span`
    font-size: 12px;
    color: ${color.grey600};
`

export const PointButton = styled.button`
    position: absolute;
    top: 5px;
    left: 5px;
    outline: none;
    border: none;
    border-radius: 50%;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 290px);
    grid-gap: 40px;
    margin: 0 auto;
    min-width: 1280px;
`

export const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 1280px;
`

export const PurpleBack = styled.div`
    position: absolute;
    background: ${color.purple200};
    width: 400px;
    height: 350px;
    bottom: 0;
    left: 330px;
    transform-origin: left bottom;
    transform: rotate(17deg);
`

export const ButtonsWrapper = styled.div`
    position: absolute;
    left: 425px;
    bottom: 12px;
    display: flex;
`

export const RadiusButton = styled.div<{active?: boolean}>`
    padding: 5px 18px;
    color: white;
    border: none;
    border-radius: 25px;
    background: #350871;
    outline: none;
    font-size: 14px;
    white-space: nowrap;
    ${props => props.active && css`
        padding: 5px 30px;
        cursor: pointer;
        &:hover {
            background: #2A084A;
        }
    `}
    &:last-child {
        margin-left: 10px;
    }
`

export const IconWrapper = styled.div`
    position: absolute;
    top: 25px;
    left: 339px;
    border-radius: 50%;
    width: 66px;
    height: 66px;
    border: 2.5px solid transparent;
    background-image: linear-gradient(white, white), linear-gradient(to bottom, #f8df7d 10%, #6618ab 55%, #7c36ee 150%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

export const IntroWrapper = styled.div`
    position: absolute;
    left: 435px;
    top: 30px;
    width: 160px;
    font-size: 12px;
    color: white;
    padding: 10px 5px;
    border-bottom: 2px solid white;
`
// 아이콘 추가
export const FieldIconWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
`