const activeFilters = document.querySelector(".filters");
const img = document.querySelector("img");
const btnRest = document.querySelector('.btn-reset')

function getStyle(e) {
  
  if (e.target.matches('input[type="range"]')) {
    
    img.style.cssText += `--${e.target.name}: ${e.target.value}${e.target.dataset.sizing}`;
    e.target.labels[0].children[1].innerHTML = e.target.value
  }
  // e.path.label.lastElementChild.innerText = e.target.value
  // parentElement
}

activeFilters.addEventListener("input", getStyle);
console.log(activeFilters);

const btnScreen = document.querySelector('.fullscreen')

function toggleScreen() {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen()
  }else{
    if(document.fullscreenEnabled){
      document.exitFullscreen()
    }
 
  }
}

btnScreen.addEventListener('click', toggleScreen)
