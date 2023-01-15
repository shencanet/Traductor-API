const URL_GET = "https://text-translator2.p.rapidapi.com/getLanguages";
const URL_POST = "https://text-translator2.p.rapidapi.com/translate";
//Elemntos Dom
let TranslateFrom = document.querySelector("#TranslateFrom");
//console.log(TranslateFrom);comprobar bien enlazado
let translateTo = document.querySelector("#translateTo");

const encodedParams = new URLSearchParams();
encodedParams.append("source_language", "es");
encodedParams.append("target_language", "en");
encodedParams.append("text", "What is your name?");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "7b0da1adeemsh0be3fff6a70c538p13cb17jsn5b195099a61c",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
  body: encodedParams,
};
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
    console.log(objeto.data.languages[11].code)
    //codigo de los selects
    let lenguages = objeto.data.languages;
    lenguages.forEach((element) => {
      TranslateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`;
      translateTo.innerHTML += `<option value="${element.code}">${element.name}</option>`;
    });
  });

fetch(URL_POST, options)
  .then((response) => response.json())
  .then((objeto) => {

  })
  .catch((err) => console.log(err));

//traduccion recoger datos textarea para enviar a la pai

let TrnaslateBTN = document.querySelector("#TrnaslateBTN");
let InputTranslateFrom = document.querySelector("#InputTranslateFrom");
TrnaslateBTN.addEventListener("click", () => {
  //console.log(InputTranslateFrom.value)
  let InputTranslateFrom = document.querySelector("#InputTranslateFrom");
  let textToTranslate = InputTranslateFrom.value;
});
