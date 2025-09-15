const API_BASE_URL = 'https://pruebas-8e2i.onrender.com'; 

async function login() {
  const res = await fetch(`${API_BASE_URL}/auth`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: 'test' }),
  });
  const data = await res.json();
  console.log(data);
}

login();
