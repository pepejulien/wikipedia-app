const api_url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='
const wiki_link = 'https://en.wikipedia.org/wiki'

const articlesContainer = document.querySelector('.articles-container')

function getArticles(searchTerm) {
    $.ajax({
        url: api_url + searchTerm,
        dataType: 'jsonp'
    })
    .done(function(response) {
        console.log(response);

        for (let i = 0; i < response.query.search.length; i++) {
            const title = response.query.search[i].title
            const snippet = response.query.search[i].snippet

            articlesContainer.innerHTML += `
            <a class="article" href="${wiki_link}/${title}" target="_blank" rel="noopener">
                <h3 class="article-title">${title}</h3>
                <p class="article-snippet">${snippet}</p>
            </a>
            `
        }
    })

}

searchForm.addEventListener('submit', function(event) {
    event.preventDefault()

    articlesContainer.innerHTML = ''

    getArticles(search.value)
})
