export const stationLoader = async () => {
  const res = await fetch("http://localhost:5000/api/stations");

  if (!res.ok) throw new Error("something went wrong");
  const stations = await res.json();

  return { stations };
};
