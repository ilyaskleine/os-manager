import "./Zitat.css";

export default function Zitat({ zitat }) {
  return (
    <div className="zitat-container" style={{ flexGrow: zitat.length / 10 }}>
      <p>{zitat}</p>
    </div>
  );
}
