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

}