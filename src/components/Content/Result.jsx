const Result = () => {
  return (
    <div className="flex flex-col text-[var(--neutral-pale-blue)] items-center bg-[image:var(--gradient-bg)] border">
      <h2>Your Result</h2>
      <div className="text-center">
        <p className="text-4xl font-semibold">76</p>
        <p>of 100</p>
      </div>
      <div className="border-amber-500 border-2 text-center">
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
