async function loadInfo() {
  try {
    const res = await fetch('/info');
    const data = await res.json();

    // Display JSON
    document.getElementById('infoBox').textContent = JSON.stringify(data, null, 2);

    // Apply environment color
    const color = data.envColor.toLowerCase();

    if (color === 'blue') {
      document.body.style.backgroundColor = '#cce5ff';
    } else if (color === 'green') {
      document.body.style.backgroundColor = '#d4edda';
    } else {
      document.body.style.backgroundColor = '#f8f9fa';
    }
  } catch (err) {
    document.getElementById('infoBox').textContent = 'Error fetching info: ' + err.message;
  }
}

document.getElementById('infoBtn').addEventListener('click', loadInfo);

// Auto-load when page opens
loadInfo();
