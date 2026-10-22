/* N&N International — app logic (classic script, no build step) */
(function () {
  "use strict";
  var products = window.NN_PRODUCTS || [];
  var categories = window.NN_CATEGORIES || [];
  var active = "all";

  var grid = document.getElementById("product-grid");
  var filtersEl = document.getElementById("filters");
  var countEl = document.getElementById("result-count");
  var emptyEl = document.getElementById("empty-state");

  function renderFilters() {
    filtersEl.innerHTML = "";
    categories.forEach(function (cat) {
      var n = cat.id === "all" ? products.length : products.filter(function (p) { return p.category === cat.id; }).length;
      if (cat.id !== "all" && n === 0) return;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filter-btn" + (cat.id === active ? " is-active" : "");
      b.textContent = cat.label;
      b.setAttribute("aria-pressed", cat.id === active ? "true" : "false");
      b.setAttribute("data-category", cat.id);
      b.addEventListener("click", function () { active = cat.id; renderFilters(); renderGrid(); });
      filtersEl.appendChild(b);
    });
  }

  function renderGrid() {
    var shown = active === "all" ? products : products.filter(function (p) { return p.category === active; });
    grid.innerHTML = "";
    shown.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "product-card";
      var img = document.createElement("img");
      img.src = p.image; img.alt = p.alt; img.loading = "lazy"; img.width = 1200; img.height = 750;
      var body = document.createElement("div"); body.className = "product-body";
      var tag = document.createElement("span"); tag.className = "product-tag"; tag.textContent = p.categoryLabel;
      var h = document.createElement("h3"); h.textContent = p.name;
      var d = document.createElement("p"); d.textContent = p.description;
      body.appendChild(tag); body.appendChild(h); body.appendChild(d);
      card.appendChild(img); card.appendChild(body);
      grid.appendChild(card);
    });
    countEl.textContent = "Showing " + shown.length + " of " + products.length + " products";
    emptyEl.hidden = shown.length !== 0;
  }

  /* Mobile nav */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  renderFilters();
  renderGrid();
})();
