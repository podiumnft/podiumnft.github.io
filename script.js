var prev1=0;
var prev2=0;
function nftchange(){
  var image1=Math.floor(Math.random()*6)+1;
  var image2=Math.floor(Math.random()*6)+1;
 
  while (image1===image2) {
    image2=Math.floor(Math.random()*6)+1;
  }
  while(image1===prev1){
    image1=Math.floor(Math.random()*6)+1;
  }
  while(image1===prev1){
    image2=Math.floor(Math.random()*6)+1;
  }
  let srcimage1="images/img/"+image1+".png";
  let srcimage2="images/img/"+image2+".png";
  document.getElementById("nft1").src=srcimage1;
  document.getElementById("nft2").src=srcimage2;
  prev1=image1;
 prev2=image2;
}
setInterval('nftchange()', 700);


const stringd=['s','w','e','e','t','C','o','n','e']
const colors=['#80B1FF','#C5C5FF','#A4A4F4','#FFD2EA','#FFC2DF','#FFA4D4','#FFCC99','#FFE98A','#79E8B3','#B3FFC7','#BBEFFF','#99E2FF']
var change=[100]
var no;
function randomchange()  {
  result=''
  for(let x in stringd){

result+=stringd[x].fontcolor(colors[Math.floor(Math.random()*colors.length)]);
}
document.getElementById('head').innerHTML = result;
document.getElementById('logo').innerHTML = result;
change=[100];
}
setInterval('randomchange()', 500);



const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
      '#A4A4F4',
      '#FFD2EA',
      '#80B1FF'
];
const options={
  threshold:0.5
};
let observer = new IntersectionObserver(navCheck,options);

function navCheck(entries){
  entries.forEach(entry => {
    const className=entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex=entry.target.getAttribute('data-index')
    const coords=activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top-3,
      left: coords.left-7
    };
    if(entry.isIntersecting){
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.background=gradients[gradientIndex];
    }
  });
}

sections.forEach(section =>{
  observer.observe(section);
});

const primaryNav=document.querySelector(".primary-navigation");
const navToggle=document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click',()=>{
  const visibility=primaryNav.getAttribute("data-visible");
  if(visibility==="false"){
    primaryNav.setAttribute('data-visible',true);
    navToggle.setAttribute('aria-expanded',true);
    document.querySelector(".box").setAttribute('checked',false);
    document.querySelector(".top").setAttribute('aria-expanded',true);
    document.querySelector(".middle").setAttribute('aria-expanded',true);
    document.querySelector(".bottom").setAttribute('aria-expanded',true);
  } else if(visibility==="true"){
    primaryNav.setAttribute('data-visible',false);
    navToggle.setAttribute('aria-expanded',false);
    document.querySelector(".box").setAttribute('checked',true);
    document.querySelector(".top").setAttribute('aria-expanded',false);
    document.querySelector(".middle").setAttribute('aria-expanded',false);
    document.querySelector(".bottom").setAttribute('aria-expanded',false);
  }
})