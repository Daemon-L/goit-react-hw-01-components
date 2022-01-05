import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHead,
  HeadData,
  BodyString,
  BodyData,
  
} from './TransactionHistory.styled'

function TransactionHistory({ items }) {
    return (
        <TransactionTable>
            <TableHead>
                <tr>
                    <HeadData>Type</HeadData>
                    <HeadData>Amount</HeadData>
                    <HeadData>Currency</HeadData>
                </tr>
            </TableHead>

         {items.map(({ id, type, amount, currency }) => (
            <BodyString key={id}>
                <tr>
                    <BodyData>{type}</BodyData>
                    <BodyData>{amount}</BodyData>
                    <BodyData>{currency}</BodyData>
                </tr>
            </BodyString>
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