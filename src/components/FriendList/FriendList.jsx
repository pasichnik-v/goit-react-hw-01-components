import PropTypes from 'prop-types';
export const Friendlist = ({ friends }) => {
    return (
        <ul class="friend-list">
        {friends.map(friend => (
    <li key={friend.id} class="item">
        <span class="status">{friend.isOnline}</span>
        <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
        <p class="name">{friend.name}</p>
    </li>
))}     
</ul>    
    );
}

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};