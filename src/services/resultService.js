export const getResult = async () => {
  const res = await fetch("/mocks/data.json");
  if (!res.ok) throw new Error("Failed to fetch results");

  return res.json();
};
