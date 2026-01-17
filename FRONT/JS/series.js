let series = [];
fetch("../DATA/series.json")
  .then(res=>res.json())
  .then(data=>{
    series=data;
    const container=document.getElementById("allseries");
    container.innerHTML="";
    series.forEach(s=>{
      const card=document.createElement("div");
      card.className="crd";
      card.innerHTML=`
        <img src="${s.poster}" alt="${s.title}">
        <div class="crd-info">
          <span>${s.genre}</span>
          <h3>${s.title} (${s.year})</h3>
        </div>
      `;
      card.addEventListener("click", ()=>{
        localStorage.setItem("selectedMovie", JSON.stringify(s));
        window.location.href = "film.html";
    });
      container.appendChild(card);
    });
  });
