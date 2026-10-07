/* Mobile menu: opens and closes the navbar links on small screens. */
(function(){
  var btn=document.getElementById("menu"),nav=document.getElementById("nav");
  if(!btn||!nav)return;
  function setOpen(open){
    nav.classList.toggle("open",open);
    btn.setAttribute("aria-expanded",open?"true":"false");
    btn.setAttribute("aria-label",open?"Close menu":"Open menu");
    btn.innerHTML=open?"&#10005;":"&#9776;";
  }
  btn.addEventListener("click",function(){setOpen(!nav.classList.contains("open"))});
  nav.addEventListener("click",function(e){if(e.target.tagName==="A")setOpen(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")setOpen(false)});
  document.addEventListener("click",function(e){
    if(nav.classList.contains("open")&&!nav.contains(e.target)&&!btn.contains(e.target))setOpen(false);
  });
  matchMedia("(min-width: 761px)").addEventListener("change",function(m){if(m.matches)setOpen(false)});
})();
