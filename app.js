console.log("Let's get this party started!");
// Key: r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ 
const key = 'r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ';
const searchForm = document.querySelector('#searchform');
const userInput = document.querySelector('#search');

/**
 * 
 * @param {*} term 
 */
async function getGifByTerm(term) {
    try {
        const searchUrl = `http://api.giphy.com/v1/gifs/random?q=${term}&api_key=${key}`;
        const result = await axios.get(searchUrl);
        console.log(result.data.data.url);

    } catch (e) {
        alert(`Your search for ${term} didn't work`);
    }
}


