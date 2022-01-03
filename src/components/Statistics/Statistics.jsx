import PropTypes from 'prop-types';


function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}
            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => (
                <li class="item" key={id}>
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
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



