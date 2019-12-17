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
	if (currency === '' || cryptocurrency === '') {
		// Display error
		ui.displayErrorMessage('All fields are mandatory.', 'deep-orange darken-4 card-panel');
	}else{
		cryptoApi.queryAPIforRate(currency, cryptocurrency)
			.then(data => {
				// We also pass currency here so that we can do some manipulation to get dynamic rate from API
				ui.displayResult(data.result[0], currency);
			})
	}

});