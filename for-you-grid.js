(function () {
  function init() {
    document.querySelectorAll('.fn-heart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        btn.classList.toggle('active');
      });
    });

    document.querySelectorAll('.fn-card').forEach(function (card) {
      var swatches = card.querySelectorAll('.fn-swatch');
      swatches.forEach(function (sw) {
        sw.addEventListener('click', function () {
          swatches.forEach(function (s) { s.classList.remove('selected'); });
          sw.classList.add('selected');
        });
      });
    });

    document.querySelectorAll('.fn-pill').forEach(function (pill) {
      pill.addEventListener('click', function (e) {
        var href = pill.getAttribute('href');
        if (!href || href === '#') {
          e.preventDefault();
        }
        document.querySelectorAll('.fn-pill').forEach(function (p) {
          p.classList.remove('active');
        });
        pill.classList.add('active');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', init);
})();
