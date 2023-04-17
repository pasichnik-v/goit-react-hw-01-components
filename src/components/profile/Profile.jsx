import PropTypes from 'prop-types';
import p from "./Profile.module.css"
export const Profile = ({
    avatar,
    tag,
    username,
    location,
    stats,
}) => {
    return <div className={p.profile}>
  <div className={p.description}>
    <img
      src={avatar}
      alt={tag}
      className={p.avatar}
    />
    <p className={p.name}>{username}</p>
    <p className={p.tag}>@{tag}</p>
    <p className={p.location}>{location}</p>
  </div>

  <ul className={p.stats}>
    <li className={p.listItem}>
      <span className={p.label}>Followers</span>
      <span className={p.quantity}>{stats.followers.toLocaleString('en-US')}</span>
    </li>
    <li className={p.listItem}>
      <span className={p.label}>Views</span>
      <span className={p.quantity}>{stats.views.toLocaleString('en-US')}</span>
    </li>
    <li className={p.listItem}>
      <span className={p.label}>Likes</span>
      <span className={p.quantity}>{stats.likes.toLocaleString('en-US')}</span>
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