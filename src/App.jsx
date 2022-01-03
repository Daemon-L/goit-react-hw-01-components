import Profile from './components/Profile/Profile';
import user from '../src/components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import stats from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />,
            <Statistics title="Upload stats" stats={stats} />,
            <FriendList friends={friends} />,
            <TransactionHistory items={transactions} />,
            
        </div>
    );
}

