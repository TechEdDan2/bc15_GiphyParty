console.log("Let's get this party started!");
// Key: r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ 
const key = 'r4KF5WGYjnw6abjVL3JN3JS8TeJETHjQ';
const searchForm = document.querySelector('#searchform');
const userInput = document.querySelector('#search');
const gifBox = document.querySelector('#imgBox');

function newGifImg(imgUrl) {
    let $newImg = $('<img>', {
        src: imgUrl
    });
    $newImg.appendTo('#imgBox');
}

searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    let userTerm = userInput.value;
    console.log(userTerm);

    // search for a random image that matches the target term
    const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${userTerm}&api_key=${key}&limit=1`;
    const result = await axios.get(searchUrl);

    console.log(result.data);

    // call the newGifImg() function
    // newGifImg(result.data);
});