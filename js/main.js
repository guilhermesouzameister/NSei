// Vídeos só tocam quando estão na tela (economiza dados e bateria).
// Com "reduzir movimento" ativado no sistema, ficam parados no poster.
(function () {
  var videos = document.querySelectorAll('.media video');
  if (!videos.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    videos.forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });
    return;
  }

  if (!('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.25 });

  videos.forEach(function (v) { io.observe(v); });
})();
