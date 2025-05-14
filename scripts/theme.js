(function(){
  const style = document.getElementById('theme-style');
  const light = `
    --grad-start:#f6e7cd;
    --grad-end:#dfc295;
    --primary:#b07a43;
    --text:#4d3a13;
    --card:#fff8ef
  `;
  const dark = `
    --grad-start:#3f3425;
    --grad-end:#241e14;
    --primary:#e0b67a;
    --text:#f5f0ea;
    --card:#4d402d
  `;
  const mq = matchMedia('(prefers-color-scheme:dark)');
  
  function apply(m) {
    style.textContent = `:root{${m === 'dark' ? dark : m === 'light' ? light : mq.matches ? dark : light}}`;
  }
  
  const saved = localStorage.getItem('museumTheme') || 'auto';
  apply(saved);
  
  mq.addEventListener('change', () => {
    if ((localStorage.getItem('museumTheme') || 'auto') === 'auto') {
      apply('auto');
    }
  });
  
  window.setTheme = function(m) {
    localStorage.setItem('museumTheme', m);
    apply(m);
  };
})();