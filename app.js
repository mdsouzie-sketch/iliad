// ILIAD site behavior.

(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsIO = 'IntersectionObserver' in window;

    // Apply editable copy from content.js (window.SITE_CONTENT) onto any
    // element with a data-content="path.to.field" attribute. If content.js
    // is missing or a path doesn't resolve, the HTML default text is kept.
    // String values render as innerHTML so light formatting (<strong>, <em>,
    // <a href>, <br>) works. Array values render as <li> children.
    if (window.SITE_CONTENT) {
        const resolve = (obj, path) =>
            path.split('.').reduce((v, k) => (v == null ? v : v[k]), obj);
        document.querySelectorAll('[data-content]').forEach((el) => {
            const value = resolve(window.SITE_CONTENT, el.dataset.content);
            if (value == null) return;
            if (Array.isArray(value)) {
                el.innerHTML = value.map((v) => `<li>${v}</li>`).join('');
            } else {
                el.innerHTML = value;
            }
        });
    }

    // Scroll-triggered fade-up
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        if (supportsIO && !reduceMotion) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            io.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
            );
            reveals.forEach((el) => io.observe(el));
        } else {
            reveals.forEach((el) => el.classList.add('is-visible'));
        }
    }

    // Sticky chapter rail — highlight active section while scrolling
    const railItems = document.querySelectorAll('.rail-item');
    if (railItems.length && supportsIO) {
        const railObserver = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (!visible) return;
                railItems.forEach((item) => {
                    item.classList.toggle('active', item.dataset.target === visible.target.id);
                });
            },
            { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        railItems.forEach((item) => {
            const target = document.getElementById(item.dataset.target);
            if (target) railObserver.observe(target);
        });
    }

    // Scroll-spy on main nav
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu-content a');
    if (navLinks.length && supportsIO) {
        const spyMap = new Map();
        navLinks.forEach((link) => {
            let id = null;
            if (link.dataset.spy) id = link.dataset.spy;
            else if (link.hash && link.hash.startsWith('#') && link.hash.length > 1) {
                id = link.hash.slice(1);
            }
            if (!id) return;
            const section = document.getElementById(id);
            if (!section) return;
            if (!spyMap.has(section)) spyMap.set(section, []);
            spyMap.get(section).push(link);
        });

        if (spyMap.size > 0) {
            const navObserver = new IntersectionObserver(
                (entries) => {
                    const visible = entries
                        .filter((e) => e.isIntersecting)
                        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                    if (!visible) return;
                    const activeLinks = spyMap.get(visible.target) || [];
                    navLinks.forEach((link) => {
                        if (link.dataset.staticActive === 'true') return;
                        link.classList.toggle('active', activeLinks.includes(link));
                    });
                },
                { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
            );
            spyMap.forEach((_, section) => navObserver.observe(section));
        }
    }

    // Mobile hamburger menu
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (navToggle && mobileMenu) {
        const setOpen = (open) => {
            navToggle.classList.toggle('is-open', open);
            mobileMenu.classList.toggle('is-open', open);
            navToggle.setAttribute('aria-expanded', String(open));
            mobileMenu.setAttribute('aria-hidden', String(!open));
            navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            document.body.style.overflow = open ? 'hidden' : '';
        };
        navToggle.addEventListener('click', () => setOpen(!navToggle.classList.contains('is-open')));
        mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navToggle.classList.contains('is-open')) setOpen(false);
        });
    }

    // Smooth page-to-page fade transition.
    // Intercept clicks on internal links: fade body out, then navigate.
    // The new page's content fade-in is handled by the existing reveal observer.
    if (!reduceMotion) {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;
            const href = link.getAttribute('href');
            if (!href) return;
            // Skip non-page protocols
            if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
            // Skip new-tab/modifier-click and explicit target
            if (link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            let url;
            try {
                url = new URL(href, window.location.href);
            } catch (_) {
                return;
            }
            // Skip cross-origin
            if (url.origin !== window.location.origin) return;
            // Skip same-page anchor jumps (different hash, same pathname)
            if (url.pathname === window.location.pathname) return;
            // Looks like a real cross-page navigation — fade out first
            e.preventDefault();
            document.body.classList.add('is-leaving');
            window.setTimeout(() => {
                window.location.href = href;
            }, 280);
        });
    }

    // Hero watermark parallax drift
    const heroWatermark = document.querySelector('.hero-watermark');
    if (heroWatermark && !reduceMotion) {
        let ticking = false;
        const update = () => {
            const scroll = window.pageYOffset;
            heroWatermark.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.3}px))`;
            ticking = false;
        };
        window.addEventListener(
            'scroll',
            () => {
                if (!ticking) {
                    requestAnimationFrame(update);
                    ticking = true;
                }
            },
            { passive: true }
        );
    }
})();
