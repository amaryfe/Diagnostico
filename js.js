
const resp = fetch('https://reqres.in/api/users?page=2');
resp.then(response => response.json())
  .then((json => {
    let content = document.getElementById('container');
    let htmlX = '';
    console.log(json.data);
    json.data.forEach(element => {
      console.log(element);

      let htmlCard = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">ID: ${element.id}</h5>
          <p class="card-text">
            Email: ${element.email}
            <br>
            First name: ${element.first_name}
            <br>
            Last name: ${element.last_name}
          </p>
        </div>
        </div>`;
      htmlX = htmlX + htmlCard;
    });
    content.innerHTML = htmlX;
  }))
