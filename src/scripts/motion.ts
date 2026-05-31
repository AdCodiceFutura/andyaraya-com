const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const applyMotionPreference = () => {
  document.documentElement.classList.toggle('reduce-motion', prefersReducedMotion.matches);
  document.documentElement.classList.add('motion-ready');
};

const initRevealObserver = () => {
  const revealed = new WeakSet<Element>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || revealed.has(entry.target)) {
          return;
        }

        revealed.add(entry.target);
        entry.target.classList.add('is-visible');

        if (entry.target.hasAttribute('data-stagger')) {
          const children = entry.target.querySelectorAll<HTMLElement>('[data-reveal-child]');
          children.forEach((child, index) => {
            child.style.setProperty('--stagger-delay', `${index * 90}ms`);
            child.classList.add('is-visible');
          });
        }

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger]').forEach((element) => {
    observer.observe(element);
  });
};

const initMindmapLines = () => {
  document.querySelectorAll<SVGLineElement>('[data-line]').forEach((line, index) => {
    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
    line.style.transitionDelay = `${index * 35}ms`;
  });
};

const initMotion = () => {
  applyMotionPreference();
  initRevealObserver();
  initMindmapLines();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion, { once: true });
} else {
  initMotion();
}

prefersReducedMotion.addEventListener('change', applyMotionPreference);
