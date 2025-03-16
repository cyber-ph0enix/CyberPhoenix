gsap.registerPlugin(ScrollTrigger);

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

