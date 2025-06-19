const API_BASE_URL = "http://localhost:4000";

export const getMessage = async () => {
  const res = await fetch(`${API_BASE_URL}/`);
  const data = await res.json();
  console.log(data)
  return data.result;
};