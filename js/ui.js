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
			const cryptoCurrencies = data.cryptoCurrencies; //cryptoCurrencies is returned by getCryptoCurrenciesList()		// console.log(cryptoCurrencies);

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


	// Display exchange rate to user.
	displayResult(result, currency){
		
		let currencyKey;
		// With this logic, we are able to get the dynamic key for each currency to help get their value
		currencyKey = 'price_' + currency.toLowerCase();
		// Read currency exchange rate/value from the returned object
		const rate = result[currencyKey];
		// console.log(rate);

		// Remove the previous result if any before displaying new result
		// We look for an element with ID result & delete the 1st DIV (we create & append a DIV to display response from API)
		const preResult = document.querySelector('#result > div');
		if (preResult) {
			preResult.remove();
		}

		let HTMLTemplate ='';
		HTMLTemplate += `
			<div class="card cyan darken-3">
				<div class="card-content white-text">
					<span class="card-title">Result</span>
					<p>The Price of ${result.name} is: ${rate} ${currency}</p>
					<p>Last Hour: ${result.percent_change_1h} %</p>
					<p>Last Day: ${result.percent_change_24h} %</p>
					<p>Last 7 Days: ${result.percent_change_7d} %</p>
				</div>
			</div>
		`;

		// Display spinner
		this.showSpinner();

		// After 2 seconds, remove spinner and show result
		setTimeout(() => {
			// Display the result
			const resultDIV = document.querySelector('#result');
			resultDIV.innerHTML = HTMLTemplate;

			// Remove spinner
			document.querySelector('.spinner img').remove();
		},2000)
		
	}

	// Method definition to create display the spinner
	showSpinner(){
		const spinnerGIF = document.createElement('img');
		spinnerGIF.src = 'img/spinner.gif';
		document.querySelector('.spinner').appendChild(spinnerGIF);
	}
}