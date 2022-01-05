import styled from 'styled-components';


export const TransactionTable = styled.table`
    overflow: hidden;
    width: 600px;
    border: 1px solid #fff;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px rgba(94, 94, 95, 0.2);
`;

export const TableHead = styled.thead`
    text-transform: uppercase;
    color: #fff;
    background-color: #3fcbee;
`;

export const HeadData = styled.th`
    border: 1px solid #fff;
    width: calc(90% / 3);
    padding: 20px 0 20px 0;
`;

export const BodyString = styled.tbody`
    :nth-child(odd) {
        background-color: #d5f0f7;
    }
`;

export const BodyData = styled.td`
    text-align: center;
    color: #807d7d;
    border: 1px solid #999999;
    padding: 8px 0 8px 0;
`;