let myFavoriteNumber = 8;
let baseURL = "http://numbersapi.com";

//1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about 
//your favorite number. (Make sure you get back JSON by including the json query key, 
//specific to this API. Details.

async function numberFact(){
    let data = await $.getJSON(`${baseURL}/${myFavoriteNumber}?json`);
    console.log(data);
}
numberFact();

//Figure out how to get data on multiple numbers in a single request.
//Make that request and when you get the data back, put all of the number facts on the page.

let favoriteNumbers =[1,2,3]
async function multipleNumbers(){
    let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`);
    console.log(data);
}
multipleNumbers();

//Use the API to get 4 facts on your favorite number. 
//Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

async function fourFacts(){
    let facts = await Promise.all(
        Array.from({ length : 4 }, () => $.getJSON(`${baseURL}/${myFavoriteNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p> ${data.text} </p>`);
    });
}
fourFacts()