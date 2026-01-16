const Result = () => {
  return (
    <div className="flex flex-col text-[var(--neutral-pale-blue)] items-center gap-5 bg-[image:var(--gradient-bg)] border p-6 pb-10 rounded-bl-4xl rounded-br-4xl md:gap-8 md:pb-6 md:rounded-tr-4xl md:w-full">
      <h2 className="text-xl font-semibold tracking-wider">Your Result</h2>
      <div className="flex flex-col justify-center items-center text-center bg-[image:var(--gradient-circle)] p-4 rounded-full w-[clamp(9rem,11vw,11rem)] h-[clamp(9rem,11vw,11rem)]">
        <p className="text-[clamp(3rem,4vw,4rem)] mb-0 font-semibold">76</p>
        <p className="text-gray-400">of 100</p>
      </div>
      <div className="px-8 text-center flex flex-col gap-2">
        <p className="text-2xl font-semibold tracking-wide">Great</p>
        <p className="text-gray-300 tracking-wider text-center">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
