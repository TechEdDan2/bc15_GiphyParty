console.log("Let's get this party started!");
// Key: r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ 
const key = 'r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ';
const searchForm = document.querySelector('#searchform');
const userInput = document.querySelector('#search');
const gifBox = document.querySelector('#imgBox');

/**
 * 
 * @param {*} term 
 */
async function getGifByTerm(term) {
    try {
        const searchUrl = `http://api.giphy.com/v1/gifs/random?q=${term}&api_key=${key}`;
        const result = await axios.get(searchUrl);
        console.log(result.data.images.url);
        return result.data.data.url;
    } catch (e) {
        alert(`Your search for ${term} didn't work`);
    }
}

function newGifImg(url) {
    console.log(url);
    let $newImg = $('<img>').attr('src', url);
    $newImg.appendTo('#imgBox');
}

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let userTerm = userInput.value;
    console.log(userTerm);

    console.log(getGifByTerm(userTerm));

    newGifImg(getGifByTerm(userTerm).toString());

});
