fetch('acc.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('acc-list');
    data.forEach(acc => {
      const div = document.createElement('div');
      div.className = 'acc-item';
      div.innerHTML = `<b>${acc.type}</b>: ${acc.username} / ${acc.password}
      <br><button onclick="navigator.clipboard.writeText('${acc.username}:${acc.password}')">Copy</button>`;
      container.appendChild(div);
    });
  });
