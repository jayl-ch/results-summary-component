import { useEffect, useState } from "react";
import { getData } from "@/utils/assignData";
import Button from "@/components/Content/Button.jsx";

const Card = ({ category, score, icon, style }) => (
  <div
    className={`flex justify-between items-center ${style.bg} rounded-xl p-5`}
  >
    <div className="flex gap-2">
      <img src={icon} alt={category} />
      <span className={`${style.text}`}>{category}</span>
    </div>
    <div className={`[var(--neutral-dark-gray-blue)] font-semibold`}>
      {score}
      <span className={`text-gray-400`}> / 100</span>
    </div>
  </div>
);

const Summary = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getData(setResult);
  }, []);
  return (
    <div className="flex flex-col gap-4 py-5 px-6 md:w-full">
      <h2 className="font-semibold text-xl">Summary</h2>
      <div className="flex flex-col gap-4">
        {result.map(({ id, category, score, icon, style }) => (
          <Card
            category={category}
            score={score}
            icon={icon}
            style={style}
            key={id}
          />
        ))}
      </div>
      <Button />
    </div>
  );
};

export default Summary;
