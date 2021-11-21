deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("colorizer", {
            image: document.getElementById('myFile'),
    });
    console.log(resp);
    await deepai.renderResultIntoElement(resp, document.getElementById('abc'));
})()
