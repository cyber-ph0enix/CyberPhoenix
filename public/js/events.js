const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

// ------------- section 1 -----------------
tl.from(".section1-head h1 span", {
    y: 50,
    opacity: 0,
    transform: "skewX(-80deg)",
    filter: "blur(5px)",
    duration: 0.5,
    stagger: 0.2,
});
tl.from(".section1-head h3", {
    y: 50,
    opacity: 0,
    duration: 1,
});

tl.to(".event-date span", {
    transform: "translateY(0)",
    duration: 2,
    scrollTrigger: {
        trigger: ".event-date span",
        start: "top bottom",
        end: "bottom 50%",
        scrub: true,
    },
});
