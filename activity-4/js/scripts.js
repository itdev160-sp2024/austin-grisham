// welcome message
var user = 'Austin';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Video Game Console reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 499.99,
    studentDiscount = .99802,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);