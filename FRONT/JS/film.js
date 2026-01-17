
const movie = JSON.parse(localStorage.getItem("selectedMovie"));

const posterImg = document.querySelector(".poster img");
posterImg.src = movie.poster;

const posterTitle = document.querySelector(".poster_title");
posterTitle.textContent = movie.title;


const details = document.querySelector(".details");
details.innerHTML = `
    <p><strong>IMDB:</strong> ${movie.imdb}</span></p>
    <p><strong>წელი:</strong> ${movie.year}</p>
    <p><strong>კატეგორია:</strong> ${movie.genre}</p>
    <p><strong>რეჟისორი:</strong> ${movie.director}</p>
    <div class="description">
        <h3>აღწერა:</h3>
        <p>${movie.description} </p>
    </div>
`;

localStorage.removeItem("selectedMovie");
