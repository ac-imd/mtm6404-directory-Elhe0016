// List function
function list(clients) {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        <strong>${client.name} - $ ${client.balance.toFixed(2)}</strong>
      </li>
    `).join('');
  }
  
 