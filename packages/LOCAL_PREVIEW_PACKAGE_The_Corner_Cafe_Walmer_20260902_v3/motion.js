(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const links = [...document.querySelectorAll('.site-header nav a')];

  if (!reduce) {
    document.documentElement.classList.add('motion-ready');
  }

  const mapped = links.map(link => [link, document.querySelector(link.getAttribute('href'))]).filter(([, target]) => target);
  const navigation = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
      mapped.forEach(([link, target]) => {
        if (target === entry.target) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-26% 0px -66% 0px', threshold: 0 });
  mapped.forEach(([, target]) => navigation.observe(target));
})();
