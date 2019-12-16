class UI
{
	constructor()
	{
		this.init();
	}

	init()
	{
		this.loadCryptoCurrencies();
	}

	// Load options for the form from API
	loadCryptoCurrencies(){
		cryptoApi.getCryptoCurrenciesList()
		.then(data => {
			const cryptoCurrencies = data.cryptoCurrencies; //cryptoCurrenciies is returned by cryptoAPI class
			// console.log(cryptoCurrencies);

			// Build options for select from the restapi
			const select = document.getElementById('cryptocurrency');

			cryptoCurrencies.forEach(currency => {
				// Add options
				const option = document.createElement('option');
				option.value = currency.id;
				option.appendChild(document.createTextNode(currency.name));
				select.appendChild(option);
			})

		})
	}

	// Build error DIV and display to caller
	displayErrorMessage(message, classes){
		const div = document.createElement('div');
		// Add classes
		div.className = classes;
		// Add error message
		div.appendChild(document.createTextNode(message));

		const messageDiv = document.querySelector('.messages');
		messageDiv.appendChild(div);

		// Remove error message after 3 seconds
		setTimeout(() => {
			document.querySelector('.messages div').remove(); //remove any div inside an element with class messages
		}, 3000);
	}
}