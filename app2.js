console.log("Let's get this party started!");
// Key: r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ 
const key = 'r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ';
const searchForm = document.querySelector('#searchform');
const userInput = document.querySelector('#search');
const $gifBox = $('#imgBox');

/**
 * 
 * @param {*} imgUrl 
 */
function newGifImg(imgUrl) {
    let $newImg = $('<img>', {
        src: imgUrl
    });
    $newImg.appendTo('#imgBox');
}

/**
 * 
 */
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    let userTerm = userInput.value;
    console.log(userTerm);
    userInput.value = '';

    // search for a random image that matches the target term
    try {
        const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${userTerm}&api_key=${key}`;
        const results = await axios.get(searchUrl);

        console.log(results.data);

        let numResults = results.data.data.length;
        console.log(numResults);

        let randomNum = Math.floor(Math.random() * numResults);

        randomUrl = results.data.data[randomNum].images.downsized.url;

        console.log(randomUrl);

        newGifImg(randomUrl);
    } catch (e) {
        alert(`Sorry something went wrong looking for ${userTerm}`);
    }
});

/**
 * 
 */
$('#delete').on('click', function () {
    $gifBox.empty();
});