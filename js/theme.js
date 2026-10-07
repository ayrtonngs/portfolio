(function(){
  var root=document.documentElement,btn=document.getElementById("theme"),mq=matchMedia("(prefers-color-scheme: dark)");
  function isDark(){var t=root.getAttribute("data-theme");return t?t==="dark":mq.matches}
  function paint(){var d=isDark();btn.innerHTML="<span>"+(d?"\u2600\uFE0F":"\uD83C\uDF19")+"</span>";btn.setAttribute("aria-label",d?"Switch to light mode":"Switch to dark mode")}
  try{var s=localStorage.getItem("theme");if(s)root.setAttribute("data-theme",s)}catch(e){}
  btn.addEventListener("click",function(){
    var next=isDark()?"light":"dark";
    root.classList.add("theme-anim");clearTimeout(window.__t);window.__t=setTimeout(function(){root.classList.remove("theme-anim")},500);
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("theme",next)}catch(e){}
    paint();
    var sp=btn.firstChild;if(sp&&!matchMedia("(prefers-reduced-motion: reduce)").matches){sp.style.transition="none";sp.style.transform="rotate(-180deg)";sp.offsetWidth;sp.style.transition="";sp.style.transform="rotate(0deg)"}
  });
  mq.addEventListener&&mq.addEventListener("change",paint);
  paint();
})();
