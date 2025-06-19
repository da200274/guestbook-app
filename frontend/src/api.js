const API_BASE_URL = "http://localhost:4000";

export const getMessage = async () => {
  const res = await fetch(`${API_BASE_URL}/getMessage`);
  const data = await res.json();
  console.log(data);
  return data.result;
}

export const sendMessage = async(name, content) =>{
    const res = await fetch(`${API_BASE_URL}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            content: content
        })
    });

    const data = await res.json();
    console.log(data);
    return data;
}