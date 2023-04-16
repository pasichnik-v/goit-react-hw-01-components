import { Profile } from "./profile/Profile";
import user from "./profile/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import { Friendlist } from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
      <Statistics title="Upload stats" stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

