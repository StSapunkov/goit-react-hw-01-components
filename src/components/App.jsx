import css from './App.module.css';
// Profile
import Profile from 'components/profile/profile';
import user from 'components/profile/user.json';
// Statistics
import StatisticsList from 'components/statistics/statistics';
import statsData from 'components/statistics/data.json';
// Transactions
import Transactions from 'components/transactions/transactions';
import transactions from 'components/transactions/transactions.json';
// FriendsList
import FriendsList from './FriendList/FriendList';
import friendsData from 'components/FriendList/friends.json';

// Виведення 
export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatisticsList stats={statsData} title="Statistics" />
      <FriendsList friends={friendsData} />
      <Transactions items={transactions}/>
    </div>
  );
};
