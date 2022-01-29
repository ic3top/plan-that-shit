import './animated-bg.css';
import cardImg from '../../images/card.svg';

export function AnimatedBg() {
  return (
    <div className="v-area">
      <ul className="v-circles">
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
        <li><img src={cardImg} alt="card" /></li>
      </ul>
    </div>
  );
}
