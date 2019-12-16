// Instantiate the classes
const cryptoApi = new cryptoAPI();
const ui = new UI();

// Create variables
const form = document.getElementById('form');


// Add event listener
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Read selected currency
	const currency = document.getElementById('currency').value;
	// Read selected crypto currency
	const cryptocurrency = document.getElementById('cryptocurrency').value;

	// Validate user input
	if (currency === '' or cryptocurrency === '') {}

});