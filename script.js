document.addEventListener("DOMContentLoaded", () => {
    const t = document.querySelector(".menu-toggle"), n = document.querySelector(".nav"), links = document.querySelectorAll(".nav a"), els = document.querySelectorAll(".reveal"), sections = document.querySelectorAll("main section[id]"), year = document.querySelector("#year");
    if (t && n) { t.addEventListener("click", () => { const open = n.classList.toggle("open"); t.setAttribute("aria-expanded", String(open)) }); links.forEach(l => l.addEventListener("click", () => { n.classList.remove("open"); t.setAttribute("aria-expanded", "false") })) }
    if ("IntersectionObserver" in window) {
        const r = new IntersectionObserver((entries, obs) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target) } }) }, { threshold: .12 }); els.forEach(e => r.observe(e));
        const s = new IntersectionObserver(entries => { entries.forEach(e => { if (!e.isIntersecting) return; links.forEach(l => l.classList.remove("active")); const a = document.querySelector(`.nav a[href="#${e.target.id}"]`); if (a) a.classList.add("active") }) }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 }); sections.forEach(e => s.observe(e))
    } else els.forEach(e => e.classList.add("visible"));
    if (year) year.textContent = new Date().getFullYear();
});
