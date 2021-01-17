import styled from 'styled-components'

export const ItemWrapper = styled.div<{max: number, now: number}>`
    width: 290px;
    height: 200px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.29);
    border: 1px solid #C8C8C8;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    background: white;
    transition: 0.4s width cubic-bezier(0.3, 0.3, 0.0, 1.0), 0.2s box-shadow linear;
    overflow: hidden;

    &:hover {
        width: 620px;
        
    }
    &:hover + div {
        box-shadow: none;
    }
    &:hover > img {
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
    color: #545454;
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
    color: #545454;
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
`

export const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const PurpleBack = styled.div`
    position: absolute;
    background: #7B1ACF;
    width: 400px;
    height: 350px;
    bottom: 0;
    left: 330px;
    transform-origin: left bottom;
    transform: rotate(17deg);
`