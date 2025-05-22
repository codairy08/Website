// Add any interactive JavaScript later here (optional)
// Toggle navbar on small screens
document.getElementById('navToggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});

function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById("liveDateTime").textContent = `Current time: ${formatted}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();


console.log("Website Loaded!");
