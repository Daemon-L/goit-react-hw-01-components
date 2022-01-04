import styled from 'styled-components';

export const FriendsItem = styled.li`
    position: relative;
    display: flex;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px rgba(94, 94, 95, 0.2);

    :last-child {
    margin-bottom: 0;
  }
`;

export const FriendsStatus = styled.span`
    position: absolute;
    top: 35%;
    left: 20px;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: ${({ isOnline }) => {
        return isOnline ? 'green' : 'red';
    }};
`;

export const FriendsAvatar = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 50px;
    margin-top: auto;
    margin-bottom: auto;

    border-radius: 4px;
    background: #cac9c9;
    padding: 4px;
`;

export const FriendsName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 24px;
`;