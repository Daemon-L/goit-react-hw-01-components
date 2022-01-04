import PropTypes from 'prop-types';

import {
  StatSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';




function Statistics({ title, stats }) {
    return (
        <StatSection>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                <StatItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </StatItem>
                ))}
            </StatList>
        </StatSection>
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



