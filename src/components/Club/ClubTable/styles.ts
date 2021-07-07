import styled from "styled-components"
import {color} from '../../../style/index'

export const Container = styled.div`
    width: 100%;
    margin-right: 30px;
`
export const Wrapper = styled.li`
    width: 100%;
    
`
export const Name = styled.span`
    font-size: 20px;
`
export const Table = styled.table`
    border-collapse:collapse;
    width: 100%;
    background: white;
    border-right: 10px solid white;
`

export const TableHead = styled.thead`
    font-size: 16px;
    text-align: center;
    
    & th {
        font-weight: normal;
        padding: 15px 0;
        margin: 0 15px;
    }
`
export const TableBody = styled.tbody`
    text-align: center;
    font-size: 18px;
    border-top: 1px solid ${color.grey300};
`
export const TableName = styled.th`
    text-align: left;
`
export const TableItem = styled.tr`
    border-left: 6px solid ${color.purple200};
    border-bottom: 10px solid ${color.grey100};
    height: 110px;

`
export const ItemState =styled.td`
    color: ${color.purple200};
    position: relative;
`
export const ItemElement = styled.td`
    text-align: left;
    min-width: 360px;
    max-width: 360px;
        
`
export const ButtonWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 7px;
`
export const ItemOption = styled.p`
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const ItemAddress = styled.p`
    font-size: 16px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const ItemName = styled.p`
    white-space: nowrap;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
`
export const TableNameWrapper= styled.th`
    display: flex;
    align-items: center;
    padding-left: 10px;
    & span{
        font-size: 18px;
        margin-left: 10px;
    }
`
export const ClubContainer = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 0 250px;
`

