import styled from 'styled-components';
import getRandomColor from '../../utils/randomColor';


export const StatSection = styled.section`
    width: 300px;
    margin-bottom: 30px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(94, 94, 95, 0.2);
`;

export const Title = styled.h2`
    text-transform: uppercase;
    font-weight: 500;
    margin: 0px;
    padding: 20px 0 20px 0;
    text-align: center;
    border-bottom: 1px solid #999999;
`;

export const StatList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 5);
    padding: 5px;
    
    background-color: ${getRandomColor};
`;

export const Label = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
    color: #fff;
`;

export const Percentage = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;
