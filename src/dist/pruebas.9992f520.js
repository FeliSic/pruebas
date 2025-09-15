let API_BASE_URL="https://pruebas-8e2i.onrender.com";async function login(){let e=await fetch("https://pruebas-8e2i.onrender.com/auth",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:"test"})});console.log(await e.json())}login();
//# sourceMappingURL=pruebas.9992f520.js.map
