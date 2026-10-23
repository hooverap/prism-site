document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  var parents = Array.prototype.slice.call(nav.querySelectorAll(".nav-parent"));

  var closeMenus = function (except) {
    parents.forEach(function (btn) {
      if (btn !== except) btn.setAttribute("aria-expanded", "false");
    });
  };
  var closeNav = function () {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    closeMenus();
  };

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (!open) closeMenus();
  });

  // Drop-down menus: click/tap (and Enter/Space) toggles; only one open at a time.
  parents.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      closeMenus(btn);
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
    // On hover devices, pointing at one menu closes any other that was opened by click.
    btn.parentNode.addEventListener("mouseenter", function () {
      if (window.matchMedia("(hover: hover)").matches) closeMenus(btn);
    });
  });

  // Close when focus or a click leaves the nav, or on Escape.
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) closeMenus();
  });
  nav.addEventListener("focusout", function (e) {
    var item = e.target.closest(".nav-item--parent");
    if (item && !item.contains(e.relatedTarget)) {
      item.querySelector(".nav-parent").setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openBtn = nav.querySelector('.nav-parent[aria-expanded="true"]');
    if (openBtn) { closeMenus(); openBtn.focus(); }
    else if (nav.classList.contains("is-open")) { closeNav(); toggle.focus(); }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
});

// Out List / Ally List search: filters .person entries by their text.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-filter-list]").forEach(function (input) {
    var list = document.getElementById(input.getAttribute("data-filter-list"));
    var count = document.getElementById(input.getAttribute("data-filter-count"));
    if (!list) return;
    var people = Array.prototype.slice.call(list.querySelectorAll(".person"));
    var update = function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      people.forEach(function (p) {
        var match = !q || p.textContent.toLowerCase().indexOf(q) !== -1;
        p.hidden = !match;
        if (match) shown++;
      });
      if (count) count.textContent = shown + " of " + people.length + " shown";
    };
    input.addEventListener("input", update);
    update();
  });
});
