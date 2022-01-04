import PropTypes from 'prop-types';

import {
  FriendsItem,
  FriendsStatus,
  FriendsAvatar,
  FriendsName,
  
} from './FriendListItem.styled.jsx';


function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <FriendsItem key={id}>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <FriendsAvatar src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
}

export default FriendListItem;