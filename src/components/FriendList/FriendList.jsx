import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/friendListItem';


function FriendList({ friends }) {
    return (

        <ul class="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isonline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
        </ul>

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