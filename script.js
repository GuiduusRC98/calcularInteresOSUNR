const loadDataButton = document.getElementById('load-data');
const dataTableBody = document.querySelector('#data-table tbody');

loadDataButton.addEventListener('click', async () => {
  const response = await fetch('./pages/data.txt');
  const data = await response.text();
  const rows = data.split('\n');

  const filteredRows = rows.filter(row => {
    const [cuil, importe] = row.split(',');
    return cuil > 'M3' && importe > 41900;
  });

  dataTableBody.innerHTML = filteredRows.map(row => {
    const [cuil, importe] = row.split(',');
    return `<tr><td>${cuil}</td><td>${importe}</td></tr>`;
  }).join('');
});