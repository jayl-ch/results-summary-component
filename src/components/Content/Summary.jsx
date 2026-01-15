import { icon } from "@/icons/icon";

const Card = ({ title, src, result }) => (
  <div>
    <div>
      <img src={src} alt={title} />
      <span>{title}</span>
    </div>
    <div>
      {result}
      <span>/100</span>
    </div>
  </div>
);

const Summary = () => {
  return (
    <div>
      {icon.map(({ id, title, src, result }) => (
        <Card title={title} src={src} result={result} key={id} />
      ))}
    </div>
  );
};

export default Summary;
