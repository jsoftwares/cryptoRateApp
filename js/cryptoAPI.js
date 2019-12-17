class cryptoAPI
{
	// Get all the cryptocurrencies
	async getCryptoCurrenciesList(){
		const endpointResponse = await fetch('https://api.coinmarketcap.com/v1/ticker/');

		// Return response as json
		const cryptoCurrencies = await endpointResponse.json();

		// Return the object
		return {
			cryptoCurrencies
		}
	}

	// Query API for exchange rate of our currency and cryptocurrency
	async queryAPIforRate(currency, cryptocurrency){
		// Query the endpoint
		const endpoint = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

		// Return as json
		const result = await endpoint.json();

		// Return the object
		return {
			result
		}
	}

}