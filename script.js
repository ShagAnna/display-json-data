fetch ('data.json').then(res => res.json())
  .then(filterUsersData);

function filterUsersData(users) {
  {
    let total_amount = 0;
    total_amount += users[0].purchase_history[0].quantity;
    total_amount += users[0].purchase_history[1].quantity;
    total_amount += users[0].purchase_history[2].quantity;

    let user1 = {
      name: users[0].name,
      email: users[0].email,
      unique_purchase_amount: users[0].purchase_history.length,
      total_amount: total_amount
    };

    document.querySelector('.name').append(JSON.stringify(user1.name));
    document.querySelector('.email').append(JSON.stringify(user1.email));
    document.querySelector('.product').append(JSON.stringify(user1.unique_purchase_amount));
    document.querySelector('.total').append(JSON.stringify(user1.total_amount));
    console.log(user1)
  }

  {
    let total_amount = 0;
    total_amount += users[1].purchase_history[0].quantity;
    total_amount += users[1].purchase_history[1].quantity;
    total_amount += users[1].purchase_history[2].quantity;

    let user2 = {
      name: users[1].name,
      email: users[1].email,
      unique_purchase_amount: users[1].purchase_history.length,
      total_amount: total_amount
    };

    console.log(user2)
  }

  {
    let total_amount = 0;
    total_amount += users[2].purchase_history[0].quantity;
    total_amount += users[2].purchase_history[1].quantity;
    total_amount += users[2].purchase_history[2].quantity;

    let user3 = {
      name: users[2].name,
      email: users[2].email,
      unique_purchase_amount: users[2].purchase_history.length,
      total_amount: total_amount
    };

    //document.querySelector('.users').append(JSON.stringify(user3));
    console.log(user3)
  }



}






