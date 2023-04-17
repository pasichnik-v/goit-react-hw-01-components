import PropTypes from 'prop-types';
import s from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
<section className={s.statistics}>
{title && <h2>{title}</h2>}
<ul className= {s.statList}>
    {stats.map(stat => (
    <li key= {stat.id} className={s.item}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}%</span>
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
    })
  ),
};