import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/friendListItem';

import {FriendsListSection} from './FriendList.styled'


function FriendList({ friends }) {
    return (

        <FriendsListSection>
            {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
        </FriendsListSection>

    );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;