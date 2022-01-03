import PropTypes from 'prop-types';


function Statistics({ title, stats }) {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(({ id, label, percentage }) => (
                <li key={id}>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </li>
                ))}
            </ul>
        </div>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;











// const Statistics = ({
//     id,
//     label,
//     percentage}) => {
//       return (
//         <div>
//             <ul class="stat-list">
                
//                 <li class="item">
//                 <span class="label">.docx</span>
//                 <span class="percentage">4%</span>
//                 </li>
                
//             </ul>
//         </div>
//     );
// };



