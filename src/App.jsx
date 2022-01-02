import Profile from './components/Profile/Profile'
import user from '../src/components/Profile/user.json'
import Section from './components/Statistics/Section'


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
            <Section title="Upload stats"></Section>
            <Section />
        </div>
    );
}

// export default function App() {
//     return (
//         <div>
//             {users.map(user => (
//             <Profile
//             key={user.tag}
//                 username={user.username}
//                 tag={user.tag}
//                 location={user.location}
//                 avatar={user.avatar}
//                 stats={user.stats}
//                 />
//             ))}
//         </div>
//     );
// }

// export default function App() {
//   return (
//     <div>
//       <UserList items={user} />
//       <Statistics data={stats} title={title} />
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//     </div>
//   );
// }