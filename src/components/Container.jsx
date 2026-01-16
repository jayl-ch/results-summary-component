import Result from "./Content/Result";
import Summary from "./Content/Summary";

const Container = () => {
  return (
    <article className="bg-[var(--neutral-white)] h-[100vh] max-w-[45rem] md:h-auto md:flex md:rounded-4xl overflow-hidden">
      <Result />
      <Summary />
    </article>
  );
};

export default Container;
