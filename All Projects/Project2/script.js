// Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seats');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectMovie = document.getElementById('movie');

// Ticket price from the dropdown
let ticketPrice = +selectMovie.value;

// Function tp update count
function updateCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

// Event listener for selected seats
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateCount();
    }
})

// Event listener for changing movies 
selectMovie.addEventListener('change', function(e) {
     ticketPrice = +e.target.value;
     updateCount();

})

