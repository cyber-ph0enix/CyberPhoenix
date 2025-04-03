gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline();
tl.from(".section-1 span", {
    y: 50,
    opacity: 0,
    transform: "skewX(-80deg)",
    filter: "blur(5px)",
    duration: 0.5,
    stagger: 0.2,
});
tl.from(".section-1-content", {
    y: 50,
    opacity: 0,
    duration: 0.5,
})

let horizontalRevealTexts = gsap.utils.toArray(".blog-heading");
horizontalRevealTexts.forEach((text) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 95%",
            end: "center center",
            scrub: 0.25,
            // markers: true
        },
		opacity: 0,
        y: 30
    });
});
