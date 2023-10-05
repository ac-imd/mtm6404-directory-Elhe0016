// List function
function list(clients) {
    const listItems = clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.id}">
        <span>${client.name}</span>
        <span>$ ${client.balance.toFixed(2)}</span>
      </li>
    `);
  
    return listItems.join('');
  }

     // Order function
     function order(clients, property) {
        return clients.slice().sort((a, b) => a[property] - b[property]);
      }

  
  // Total function
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  //info function
  function info(index) {
    const client = clients.find((client, i) => i === index);
  
    return client;
  }

  //search function

  function search(query) {
    const results = clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
    
    return results;
  }
  
  

 
  