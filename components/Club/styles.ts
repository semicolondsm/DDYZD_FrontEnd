import styled from "styled-components"
export const Container = styled.div`
    width: 890px;
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
    border-top: 1px solid #C8C8C8;
`
export const TableName = styled.th`
    text-align: left;
`
export const TableItem = styled.tr`
    border-left: 6px solid #713EFF;
    border-bottom: 10px solid #F5F5F5;
    height: 110px;

`
export const ItemState =styled.td`
    color: #713EFF;
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
`
export const ItemPrice = styled.p`
    font-size: 16px;
    margin: 0;
`
export const ItemName = styled.p`
    white-space: nowrap;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
`
export const TableNameWrapper= styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    & span{
        font-size: 18px;
        margin-left: 10px;
    }
`