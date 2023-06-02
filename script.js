const tableBody = document.querySelector('.tbody');

fetch ('data.json').then(res => res.json())
  .then(filterUsersData);

function filterUsersData(users) {
  let all_users = [];

  {
    let total_amount = 0;
    total_amount += users[0].purchase_history[0].quantity;
    total_amount += users[0].purchase_history[1].quantity;
    total_amount += users[0].purchase_history[2].quantity;

    all_users.push({
      name: users[0].name,
      email: users[0].email,
      unique_purchase_amount: users[0].purchase_history.length,
      total_amount: total_amount
    });

    console.log(typeof total_amount)
  }

  {
    let total_amount = 0;
    total_amount += users[1].purchase_history[0].quantity;
    total_amount += users[1].purchase_history[1].quantity;
    total_amount += users[1].purchase_history[2].quantity;
    total_amount += users[1].purchase_history[3].quantity;

    all_users.push({
      name: users[1].name,
      email: users[1].email,
      unique_purchase_amount: users[1].purchase_history.length,
      total_amount: total_amount
    });
  }

  {
    let total_amount = 0;
    total_amount += users[2].purchase_history[0].quantity;
    total_amount += users[2].purchase_history[1].quantity;
    total_amount += users[2].purchase_history[2].quantity;
    total_amount += users[2].purchase_history[3].quantity;

    all_users.push({
      name: users[2].name,
      email: users[2].email,
      unique_purchase_amount: users[2].purchase_history.length,
      total_amount: total_amount
    });
  }

  for (const user of all_users) {
    const tableRow = createTableRow(user);
    tableBody.appendChild(tableRow);
  }
}

function createTableRow(data) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.innerHTML = data.name;
  row.appendChild(nameCell);

  const emailCell = document.createElement('td');
  emailCell.innerHTML = data.email;
  row.appendChild(emailCell);

  const productCell = document.createElement('td');
  productCell.innerHTML = data.unique_purchase_amount;
  row.appendChild(productCell);
  console.log(data.unique_purchase_amount)

  const totalCell = document.createElement('td');
  totalCell.innerHTML = data.total_amount;
  row.appendChild(totalCell);

  return row;

}










