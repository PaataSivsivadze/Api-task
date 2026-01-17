let movies = [];
fetch("../DATA/movies.json")
  .then(res=>res.json())
  .then(data=>{
    movies=data;
    const container=document.getElementById("allmovies");
    container.innerHTML="";
    movies.forEach(m=>{
      const card=document.createElement("div");
      card.className="crd";
      card.innerHTML=`
        <img src="${m.poster}" alt="${m.title}">
        <div class="crd-info">
          <span>${m.genre}</span>
          <h3>${m.title} (${m.year})</h3>
        </div>
      `;
      card.addEventListener("click", () => {
        localStorage.setItem("selectedMovie", JSON.stringify(m));
        window.location.href = "film.html";
      });
      container.appendChild(card);
    });
  });