
let movies=[], series=[];
Promise.all([
  fetch("../DATA/movies.json").then(r=>r.json()),
  fetch("../DATA/series.json").then(r=>r.json())
]).then(([m,s])=>{
  movies=m;
  series=s;

  renderSlider([...movies,...series]);
  renderHorizontal("popularMovies",movies.slice(0,11));
  renderHorizontal("popularSeries",series.slice(0,11));
  renderHorizontal("newlyAdded",[...movies.slice(-5),...series.slice(-5)]);

  setupScroll("popularMovies");
  setupScroll("popularSeries");
  setupScroll("newlyAdded");
});


function renderHorizontal(id,list){
  const container=document.getElementById(id);
  container.innerHTML="";
  list.forEach(item=>{
    const card=document.createElement("div");
    card.className="crd";
    card.innerHTML=`
      <img src="${item.poster}" alt="${item.title}">
      <div class="crd-info">
        <span>${item.genre}</span>
        <h3>${item.title} (${item.year})</h3>
      </div>
    `;
    card.addEventListener("click", ()=>{
        localStorage.setItem("selectedMovie", JSON.stringify(item));
        window.location.href = "film.html";
    });

    container.appendChild(card);
  });
}



const mainSlider=document.getElementById("m_slide");
let mainIndex=0, sliderCards=[];
function renderSlider(list){
  mainSlider.innerHTML="";
  list.forEach(item=>{
    const card=document.createElement("div");
    card.className="slr-card";
    card.innerHTML=`
      <img src="${item.poster}" alt="${item.title}">
      <div class="slr-info">
        <h2>${item.title} (${item.year})</h2>
        <p>${item.genre}</p>
      </div>
    `;
    mainSlider.appendChild(card);
  });
  sliderCards=document.querySelectorAll(".slr-card");
}
document.getElementById("m_next").addEventListener("click",()=>{
  mainIndex=(mainIndex+1)%sliderCards.length;
  mainSlider.style.transform=`translateX(-${mainIndex*100}%)`;
});
document.getElementById("m_prev").addEventListener("click",()=>{
  mainIndex=(mainIndex-1+sliderCards.length)%sliderCards.length;
  mainSlider.style.transform=`translateX(-${mainIndex*100}%)`;
});




function setupScroll(id){
  const container=document.getElementById(id);
  const leftBtn=document.querySelector(`.scroll_btn.left[data-target="${id}"]`);
  const rightBtn=document.querySelector(`.scroll_btn.right[data-target="${id}"]`);

  rightBtn.addEventListener("click",()=>{
    container.scrollBy({left:220, behavior:"smooth"});
    setTimeout(()=>{if(container.scrollLeft+container.clientWidth >= container.scrollWidth) container.scrollLeft=0;},500);
  });

  leftBtn.addEventListener("click",()=>{
    container.scrollBy({left:-220, behavior:"smooth"});
    setTimeout(()=>{if(container.scrollLeft===0) container.scrollLeft=container.scrollWidth-container.clientWidth;},500);
  });
}





