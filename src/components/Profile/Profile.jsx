import PropTypes from 'prop-types';
import {
    ProfileCard,
    Description,
    Avatar,
    Name,
    DescriptionInfo,
    Stats,
    StatsItem,
    StatsLabel,
    StatsQuantity,
} from './Profile.styled';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats }) => {
      return (
        <ProfileCard>
            <Description>
                <Avatar
                src={avatar}
                alt="User avatar"
                />
                <Name>{username}</Name>
                <DescriptionInfo>@{tag}</DescriptionInfo>
                <DescriptionInfo>{location}</DescriptionInfo>
            </Description>

            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity> {stats.followers}</StatsQuantity>
                </StatsItem>
                  
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity> {stats.views}</StatsQuantity>
                </StatsItem>
                  
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity> {stats.likes}</StatsQuantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.arrayOf(
//         PropTypes.shape({
//             followers: PropTypes.number.isRequired,
//             views: PropTypes.number.isRequired,
//             likes: PropTypes.number.isRequired,
//         }),
//     ),
// };
