const url = 'https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt4154796';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c148bde5bmshffb7a86f65ad9d6p1e3338jsn415eb73e51b0',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}