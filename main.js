
const encodedParams = new URLSearchParams();
encodedParams.append("source_language", "es");
encodedParams.append("target_language", "id");
encodedParams.append("text", "What is your name?");

const options = {
	method: 'get',
	headers: {
		//'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '7b0da1adeemsh0be3fff6a70c538p13cb17jsn5b195099a61c',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	//body: encodedParams
};


const GET_URL = 'https://text-translator2.p.rapidapi.com/getLanguages';

fetch(GET_URL, options)
.then(response => response.json())
.then(objeto => {
	let lenguages = objeto.data.languages;
	console.log()
	//codigo de los selects
	lenguages.forEach(element => {
		console.log(element)
	})
	 })

