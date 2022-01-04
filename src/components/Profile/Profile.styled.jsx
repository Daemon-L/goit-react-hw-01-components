import styled from 'styled-components';

export const ProfileCard = styled.div`
    display: block;
    text-align: center;

    width: 280px;
    margin-bottom: 30px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(94, 94, 95, 0.2);
`;

export const Description = styled.div`
  padding: 20px 0;
`;

export const Avatar = styled.img`
    width: 50%;
    border-radius: 50%;
    background: #cac9c9;
    padding-top: 4px;
    margin-bottom: 30px;
`;

export const Name = styled.p`
    margin-top: 0px;
    margin-bottom: 14px;
    font-size: 20px;
    font-weight: 700;
    color: #000;
`;

export const DescriptionInfo = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    color: #999999;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    border-top: 1px solid #999999;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: calc(100% / 3);
    height: 70px;
    border-right: 1px solid #999999;

    :last-child {
    border: none;
  }
`;

export const StatsLabel = styled.span`
    font-size: 14px; 
    color: #999999;
    margin-bottom: 4px;
`;

export const StatsQuantity = styled.span`
    font-weight: 700;
`;