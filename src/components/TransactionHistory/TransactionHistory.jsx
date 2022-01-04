import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHead,
//   TableBody,
  
} from './TransactionHistory.styled'

function TransactionHistory({ items }) {
    return (
        <TransactionTable>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>

         {items.map(({ id, type, amount, currency }) => (
            <tbody key={id}>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            </tbody>
         ))}    
        </TransactionTable>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;