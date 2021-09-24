// Get DOM Elements
const main = document.getElementById('main');


// Array for holding Objects
const data = [
    {
        image: './img/angry.jpg',
        text: "I'm angry"
    },
    {
        image: './img/drink.jpg',
        text: "I'm thirsty"
    },
    {
        image: './img/food.jpg',
        text: "I'm hungry"
    },
    {
        image: './img/grandma.jpg',
        text: "I miss grandma"
    },
    {
        image: './img/happy.jpg',
        text: "I'm happy"
    },
    {
        image: './img/home.jpg',
        text: "I'm home"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm hurt"
    },
    {
        image: './img/outside.jpg',
        text: "I'm outside"
    },
    {
        image: './img/sad.jpg',
        text: "I'm sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm scared"
    },
    {
        image: './img/school.jpg',
        text: "I'm at school"
    },
    {
        image: './img/tired.jpg',
        text: "I'm tired"
    },
];

data.forEach(createUIElement);

function createUIElement(obtain) {
    const {image, text} = obtain;
    const div = document.createElement('div');
    div.innerHTML = `<img src="${image}"/> <p>${text}</p>`;
    main.appendChild(div);
}