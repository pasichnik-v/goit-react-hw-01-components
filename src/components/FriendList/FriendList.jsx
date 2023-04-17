import PropTypes from 'prop-types';
import f from "./FriendList.module.css";

export const Friendlist = ({ friends }) => {
    return (
        <ul className={f.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={f.item}>
             <span className={`${f.status} ${friend.isOnline ? f.green : f.red}`}></span>
        <img className={f.avatar} src={friend.avatar} alt={friend.name} width="48" />
        <p className={f.name}>{friend.name}</p>
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