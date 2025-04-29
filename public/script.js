const socket = io();
socket.on('donation', data => {
  const box = document.getElementById('notification');
  box.textContent = `${data.name}: ${data.message}`;
});

async function fetchDonations() {
    const res = await fetch('/api/donations');
    const data = await res.json();
  
    const alertsDiv = document.getElementById('alerts');
    alertsDiv.innerHTML = ''; // ล้างเก่าก่อน
  
    data.forEach(donation => {
      const div = document.createElement('div');
      div.classList.add('alert');
      div.innerHTML = `<strong>${donation.name}</strong>: ${donation.message}`;
      alertsDiv.appendChild(div);
    });
  }
  
  setInterval(fetchDonations, 3000);
  fetchDonations();
  