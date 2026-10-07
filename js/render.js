(function(){
  function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e}
  function tags(list){var u=el("ul","tags");(list||[]).forEach(function(t){u.appendChild(el("li",null,t))});return u}

  function timeline(id,items){
    var root=document.getElementById(id);if(!root)return;
    (items||[]).forEach(function(it){
      var li=el("li");
      li.appendChild(el("h3",null,it.company?it.role+", "+it.company:it.role));
      var meta=[it.context,it.dates].filter(Boolean).join(" | ");
      if(meta)li.appendChild(el("p","when",meta));
      if(it.bullets&&it.bullets.length){
        var ul=el("ul");it.bullets.forEach(function(b){ul.appendChild(el("li",null,b))});li.appendChild(ul);
      }
      root.appendChild(li);
    });
  }

  function projects(items){
    var root=document.getElementById("projects-list");if(!root)return;
    (items||[]).forEach(function(p){
      var card=el("article","card"),h=el("h3");
      if(p.link){var a=el("a",null,p.title);a.href=p.link;a.target="_blank";a.rel="noopener";h.appendChild(a)}
      else h.textContent=p.title;
      card.appendChild(h);
      card.appendChild(el("p",null,p.description));
      card.appendChild(tags(p.tags));
      root.appendChild(card);
    });
  }

  function skills(obj){
    var root=document.getElementById("skills-list");if(!root)return;
    Object.keys(obj||{}).forEach(function(cat){
      var g=el("div","skill-group");g.appendChild(el("h3",null,cat));
      var ul=el("ul","skill-list");
      (obj[cat]||[]).forEach(function(s){ul.appendChild(el("li","skill",s))});
      g.appendChild(ul);root.appendChild(g);
    });
  }

  if(typeof DATA!=="undefined"){
    timeline("experience-list",DATA.experience);
    timeline("education-list",DATA.education);
    projects(DATA.projects);
    skills(DATA.skills);
  }
})();
