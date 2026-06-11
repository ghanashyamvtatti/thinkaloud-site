// Dark/light theme: defaults to the system preference; an explicit choice
// (the header toggle) is persisted and wins. Loaded synchronously in <head>
// so the saved theme applies before first paint (no flash).
(function () {
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-theme', saved);
  }
})();

function toggleTheme() {
  var root = document.documentElement;
  var current = root.getAttribute('data-theme');
  var dark = current
    ? current === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  var next = dark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
}
