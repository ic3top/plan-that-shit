import './card.css';
import classNames from "classnames";

export const Card = ({ children, onClick, dashed, selected }) => {
  const classes = classNames('planning-card', { 'planning-card_dashed': dashed, 'planning-card_selected': selected });
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
