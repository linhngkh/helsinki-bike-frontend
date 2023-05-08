export const stationLoader = async () => {
  const res = await fetch(
    "https://helsinki-bike-backend-6io18ii9d-linh-nguyenkhanh.vercel.app/api/stations"
  );

  if (!res.ok) throw new Error("something went wrong");
  const stations = await res.json();

  return { stations };
};
