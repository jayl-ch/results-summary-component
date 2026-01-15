import { useEffect, useState } from "react";
import { getData } from "@/utils/assignData";

const Card = ({ category, score, icon }) => (
  <div>
    <div>
      <img src={icon} alt={category} />
      <span>{category}</span>
    </div>
    <div>
      {score}
      <span>/100</span>
    </div>
  </div>
);

const Summary = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getData(setResult);
  }, []);
  return (
    <div>
      {result.map(({ id, category, score, icon }) => (
        <Card category={category} score={score} icon={icon} key={id} />
      ))}
    </div>
  );
};

export default Summary;
