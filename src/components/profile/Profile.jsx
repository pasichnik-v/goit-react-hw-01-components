import PropTypes from 'prop-types';
export const Profile = ({
    avatar,
    tag,
    username,
    location,
    stats,
}) => {
    return <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={tag}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers.toLocaleString('en-US')}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views.toLocaleString('en-US')}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes.toLocaleString('en-US')}</span>
    </li>
  </ul>
</div>
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};