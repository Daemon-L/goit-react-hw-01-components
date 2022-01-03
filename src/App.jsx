import Profile from './components/Profile/Profile'
import user from '../src/components/Profile/user.json'
import Statistics from './components/Statistics/Statistics'
import stats from './components/Statistics/statistical-data.json';

export default function App() {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={stats} />
            
        </div>
    );
}

