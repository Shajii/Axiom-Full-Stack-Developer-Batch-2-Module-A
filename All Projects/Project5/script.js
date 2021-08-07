// Get DOM Elements
const userBtn = document.getElementById('user');
const doubleWealthBtn = document.getElementById('doubleWealth');
const filterWealthBtn = document.getElementById('filterWealth');
const sortUserBtn = document.getElementById('sortUser');
const totalWealthBtn = document.getElementById('totalWealth');
const main = document.getElementById('main');

// User Array
var userArray = [];

// function to call data
function getData() {
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then(data => {
        const apiName = data.results[0].name;
        builtObject(apiName);
    })
}

// Function to built an object
function builtObject(apiName) {
    newUser = {name: `${apiName.first} ${apiName.last}`,
        wealth: Math.floor(Math.random()*1000000)
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
        divElement.innerHTML = `<strong>${user.name}</strong>${'$'} ${user.wealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
        main.appendChild(divElement);
    })
}

// Event Listeners
userBtn.addEventListener('click', getData);

doubleWealthBtn.addEventListener('click',  () => {
    userArray = userArray.map( user => {
        return {...user, wealth:user.wealth*2}
    })
    updateDom();
});

filterWealthBtn.addEventListener('click', () => {
    userArray = userArray.filter(user => user.wealth > 1000000)
    updateDom();
})

sortUserBtn.addEventListener('click', () => {
    userArray = userArray.sort((a,b) => a.wealth - b.wealth)
    updateDom();
})