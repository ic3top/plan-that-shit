import './loader.css';

export const Loader = ({ className }) => (
  <div className={className + " flex justify-center"}>
    <div className="dot-elastic" />
  </div>
)
