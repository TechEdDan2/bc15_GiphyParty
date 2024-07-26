// Key: r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ 
const key = 'r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ';
const userInput = document.querySelector('#search');
const searchForm = document.querySelector('#searchform');
const $gifBox = $('#imgBox');

/**
 * The newGifImg function accepts a URL and uses
 *  that data when creating a new HTML image 
 *  element. That new image is then appended a 
 *  div where all images will be displayed.
 * 
 * @param {string} imgUrl   Contains a URL 
 */
function newGifImg(imgUrl) {
    let $newImg = $('<img>', {
        src: imgUrl,
        class: 'imgStyle'
    });
    $newImg.appendTo('#imgBox');
}

/**
 * This block of code uses vanilla javascript to
 * create an event handler to extract the user's
 * keyword from the text input field and incorporate
 * the data along with the key to submit a get request
 * to Giphy for gifs
 */
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // access the text in the text input
    let userTerm = userInput.value;
    userInput.value = '';//reset text

    // search for a random image that matches the target term
    try {
        const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${userTerm}&api_key=${key}`;
        const results = await axios.get(searchUrl);

        let numResults = results.data.data.length;
        let randomNum = Math.floor(Math.random() * numResults);
        randomUrl = results.data.data[randomNum].images.downsized.url;

        newGifImg(randomUrl);
    } catch (e) {
        alert(`Sorry something went wrong looking for ${userTerm}`);
    }
});

/**
 * This block of code uses jQuery syntax to handle 
 *  the "Delete" event, which removes all images 
 *  on the page.
 */
$('#delete').on('click', function () {
    $gifBox.empty();
});