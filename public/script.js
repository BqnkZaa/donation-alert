const socket = io();
socket.on('donation', data => {
  const box = document.getElementById('notification');
  box.textContent = `${data.name}: ${data.message}`;
});