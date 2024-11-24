async function addTask(userId, text) {
  const token = localStorage.getItem('token');  // Obtén el token del localStorage

  const response = await fetch('http://localhost:5000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // Agrega el token al header
    },
    body: JSON.stringify({ userId, text }),
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Tarea agregada:', data);
  } else {
    console.error('Error:', data.message);
  }
}

async function getTasks(userId) {
  const token = localStorage.getItem('token');  // Obtén el token del localStorage

  const response = await fetch(`http://localhost:5000/api/tasks?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // Agrega el token al header
    },
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Tareas obtenidas:', data);
  } else {
    console.error('Error:', data.message);
  }
}

async function deleteTask(taskId) {
  const token = localStorage.getItem('token');  // Obtén el token del localStorage

  const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // Agrega el token al header
    },
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Tarea eliminada:', data);
  } else {
    console.error('Error:', data.message);
  }
}

async function toggleTaskCompletion(taskId) {
  const token = localStorage.getItem('token');  // Obtén el token del localStorage

  const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // Agrega el token al header
    },
  });

  const data = await response.json();
  if (response.ok) {
    console.log('Tarea actualizada:', data);
  } else {
    console.error('Error:', data.message);
  }
}
