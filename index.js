const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieContainer = document.querySelector(".movieContainer");
const searchBar = document.querySelector(".searchBar");




const getMovie = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    showMovie(data);
}


getMovie(APIURL);

const showMovie = (data) => {
    movieContainer.innerHTML = ``;
    console.log(data.results);
    data.results.forEach(element => {
        if (element.poster_path == null) return;
        const createTag = document.createElement("div");
        createTag.classList.add("movieCard")
        createTag.innerHTML = ` <img src="${IMGPATH + element.poster_path}"
        alt="logo">
        <div class="movieDetails">
            <div class="titleRating">
                <div class="title">${element.title}</div>
                <div class="rating">${element.vote_average}</div>
            </div>
            <div class="overView">${element.overview}
            </div>
        </div>`;

        movieContainer.appendChild(createTag)
    });
}


searchBar.addEventListener("keyup", (event) => {
    if (event.target.value != "") {
        getMovie(SEARCHAPI + event.target.value)
    } else {
        getMovie(APIURL)
    }
})


