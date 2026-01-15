import Result from "./Content/Result";
import Summary from "./Content/Summary";
import Button from "./Content/Button";

const Container = () => {
  return (
    <article className="bg-[var(--neutral-white)]">
      <Result />
      <Summary />
      <Button />
    </article>
  );
};

export default Container;
