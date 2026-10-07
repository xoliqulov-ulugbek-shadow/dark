const userCardsContainer = document.getElementById('userCard');
const searchInput = document.getElementById('search');
const darkModeToggle = document.getElementById('dark');

let users = [];
let k = 0

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data;
        displayUsers(users);
    })

function displayUsers(users) {
    userCardsContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <h2>${user.name}</h2>
      <p>${user.email}</p>
      <p>${user.phone}</p>
      <p>${user.address.city}, ${user.address.street}</p>
    `;
        userCardsContainer.appendChild(card);
    })
}





darkModeToggle.addEventListener("click", function () {
    k++
    if (k % 2 == 0) {
        document.head.innerHTML = `<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: white;
    color: black;
    transition: background-color 0.3s, color 0.3s;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.header input {
    padding: 10px;
    font-size: 16px;
    width: 70%;
}

.header button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: background-color 0.3s;
    border: solid 2px wheat;
  font-family: "K2D", sans-serif;
  color: black;
}

input{
    color: black;
    font-weight: bolder;
    outline: none;
    border: solid #472323 3px;
    border-radius: 10px;
    color: #472323;
transition: 0.5s;
}

#dark{
    color: #472323;
    background: none;
    border: #472323 1px solid;
    font-weight: bold;
    border-radius: 100%;
    transition: 0.5s;
}
#dark:hover{
color: white;
background-color: #472323;
border: none;

}
    </style> `
    }


    else {
        document.head.innerHTML = `<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #472323;
    color: black;
    transition: background-color 0.3s, color 0.3s;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.header input {
    padding: 10px;
    font-size: 16px;
    width: 70%;
}

.header button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: background-color 0.3s;
    border: solid 2px wheat;
  font-family: "K2D", sans-serif;
  color: black;
}

input{
    color: black;
    font-weight: bolder;
    outline: none;
    border: solid #472323 3px;
    border-radius: 10px;
    color: #472323;
transition: 0.5s;
}

#dark{
    color: white;
    background: none;
    border: white 1px solid;
    font-weight: bold;
    border-radius: 100%;
    transition: 0.5s;
}
#dark:hover{
color: #472323;
background-color: white ;
border: none;

} 
    </style> `
    }
});

if (search) {
    search.addEventListener('input', (e1) => {
        const t1 = e1.target.value.toLowerCase().trim();

        const toza = users.filter(user => 
            (user.name && user.name.toLowerCase().includes(t1)) 
        );

        displayUsers(toza);
    });
}

displayUsers(users);