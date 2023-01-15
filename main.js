const URL_GET = "https://text-translator2.p.rapidapi.com/getLanguages";
const URL_POST = "https://text-translator2.p.rapidapi.com/translate";
//Elemntos Dom
let TranslateFrom = document.querySelector("#TranslateFrom");
console.log(TranslateFrom);//comprobar bien enlazado
let translateTo = document.querySelector("#translateTo");
console.log(translateTo)




const OPTIONS = {
  method: "get",
  headers: {
    "X-RapidAPI-Key": "7b0da1adeemsh0be3fff6a70c538p13cb17jsn5b195099a61c",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
};




fetch(URL_GET, OPTIONS)
  .then((res) => res.json())
  .then((objeto) => {
    	//console.log(objeto.data.languages[11].code)
	    //console.log(objeto.data.languages[11].name)
    //codigo de los selects
    let lenguages = objeto.data.languages;
    lenguages.forEach((element) => {
		//console.log(element)
      TranslateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`;
      translateTo.innerHTML += `<option value="${element.code}">${element.name}</option>`;
    });
  });
//traduccion recoger datos textarea para enviar
let TrnaslateBTN = document.querySelector("#TrnaslateBTN");




TrnaslateBTN.addEventListener("click", () => {
  //console.log(InputTranslateFrom.value)//comprueba contenido enviado
  //console.log("click")test comprobar que el listener fuciona
 
  let InputTranslateFrom = document.querySelector("#InputTranslateFrom");
  let textToTranslate = InputTranslateFrom.value;
let outputTranslateTo = document.querySelector("#outputTranslateTo")

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", TranslateFrom.value);
  encodedParams.append("target_language", translateTo.value);
  encodedParams.append("text", textToTranslate);
  const options = {
	method: "POST",
	headers: {
	  "content-type": "application/x-www-form-urlencoded",
	  "X-RapidAPI-Key": "7b0da1adeemsh0be3fff6a70c538p13cb17jsn5b195099a61c",
	  "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
	},
	body: encodedParams,
  };
fetch('https://text-translator2.p.rapidapi.com/translate', options)
  .then((response) => response.json())
  .then(response => { 
	outputTranslateTo.innerText = response.data.translatedText;
  })
  .catch((err) => console.log(err));


//console.log(TranslateFrom.value)




});





