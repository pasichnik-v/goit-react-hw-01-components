import PropTypes from 'prop-types';
import t from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
<table className={t.transactionHistory}>
  <thead>
    <tr>
      <th className={t.dataItem}>Type</th>
      <th className={t.dataItem}>Amount</th>
      <th className={t.dataItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
    <tr key={item.id}>
      <td className={t.dataItem}>{item.type}</td>
      <td className={t.dataItem}>{item.amount}</td>
      <td className={t.dataItem}>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    );
}
    

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};