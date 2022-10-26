const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`).then(
    (res) => res.json()).then(data =>
      resultsContainer.innerHTML =
      `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`
    ).finally(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5").then(({ data }) => {
        const postsContainer = document.createElement('div');
        postsContainer.classList.add('posts__container')
        const posts = data.map(el => {
          return (`
          <div class="post">
            <span class="post__id">Post #${el.id}</span>
            <h3 class="post__title">${el.title}</h3>
            <p class="post__body">${el.body}</p>
          </div>
          `)
        })
        postsContainer.innerHTML = posts.join('')
        resultsContainer.append(postsContainer)
      })
    })

});


