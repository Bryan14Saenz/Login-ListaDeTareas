// script.js
// Simulamos una base de datos en memoria
const users = {
  '14BryanSaenz@gmail.com': 'Base1405',
};

// Alternar entre los formularios
document.getElementById('go-to-register').addEventListener('click', () => {
  document.getElementById('login-form').classList.add('d-none');
  document.getElementById('register-form').classList.remove('d-none');
});

document.getElementById('go-to-login').addEventListener('click', () => {
  document.getElementById('register-form').classList.add('d-none');
  document.getElementById('login-form').classList.remove('d-none');
});

async function registerUser(email, password) {
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Usuario registrado:', data);
  } else {
    console.error('Error:', data.message);
  }
}

async function loginUser(email, password) {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Login exitoso:', data);
    localStorage.setItem('token', data.token);  // Guarda el token
  } else {
    console.error('Error:', data.message);
  }
}
