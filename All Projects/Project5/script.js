// Get DOM Elements
const userBtn = document.getElementById('user');
const doubleWealthBtn = document.getElementById('doubleWealth');
const filterWealthBtn = document.getElementById('filterWealth');
const sortUserBtn = document.getElementById('sortUser');
const totalWealthBtn = document.getElementById('totalWealth');
const main = document.getElementById('main');

// User Array
const userArray = [];

// function to call data
function getData() {
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then(data => {
        //user.push(data.results[0].name);
        const apiName = data.results[0].name;
        builtObject(apiName);
    })
}

// Function to built an object
function builtObject(apiName) {
    newUser = {name: `${apiName.first} ${apiName.last}`,
        wealth: Math.floor(Math.random()*10000000)
    };
    userArray.push(newUser);
    updateDom();
}

// Function to update DOM
function updateDom(userData = userArray) {
    main.innerHTML = '<h2><strong>User</strong> Wealth</h2>';
    userData.forEach( user => {
        const divElement = document.createElement('div');
        divElement.classList.add('user');
        divElement.innerHTML = `<strong>${user.name}</strong>${user.wealth}`;
        main.appendChild(divElement);
    })
}



getData();
getData();
getData();