// Morphs a work card's screenshot into the cover of its case study, and back.
//
// Loaded as a plain classic script in the head, not bundled: pagereveal fires
// before the first paint of the new page, which a deferred module can miss.
// It is an external file, so script-src 'self' covers it and the CSP hash for
// the theme-init block is untouched.
//
// The case study cover is named "cover" in CSS. On the home page only the card
// being opened (or the one just returned from) may carry the same name, so it
// is set here for the length of the transition and nowhere else.
(function () {
  if (!("onpagereveal" in window)) return;

  var root = document.documentElement;

  function path(url) {
    try {
      return new URL(url, location.href).pathname;
    } catch (e) {
      return "";
    }
  }

  function slugOf(url) {
    var m = path(url).match(/^\/work\/([^/]+)\/?$/);
    return m ? m[1] : null;
  }

  function nameCard(slug, transition) {
    var img = slug && document.querySelector('a[href="/work/' + slug + '/"] img');
    if (!img) return;
    img.style.viewTransitionName = "cover";
    transition.finished.finally(function () {
      img.style.viewTransitionName = "";
    });
  }

  // Leaving the home page for a case study
  window.addEventListener("pageswap", function (e) {
    if (!e.viewTransition || !e.activation || !e.activation.entry) return;
    if (path(location.href) === "/") nameCard(slugOf(e.activation.entry.url), e.viewTransition);
  });

  // Arriving anywhere through a transition
  window.addEventListener("pagereveal", function (e) {
    if (!e.viewTransition) return;
    // The cover is already in place under the morph, so its own entrance would
    // only fade it out and back in. The class switches that entrance off.
    root.classList.add("vt-arrived");
    if (path(location.href) === "/") {
      var from =
        (window.navigation && navigation.activation && navigation.activation.from && navigation.activation.from.url) ||
        document.referrer;
      nameCard(slugOf(from), e.viewTransition);
    }
  });
})();
