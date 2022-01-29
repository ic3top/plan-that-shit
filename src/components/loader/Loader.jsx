import './loader.css';

export function Loader({ className }) {
  return (
    <div className={`${className} flex justify-center`}>
      <div className="dot-elastic" />
    </div>
  );
}
