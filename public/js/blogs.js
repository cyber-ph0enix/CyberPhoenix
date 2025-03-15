gsap.registerPlugin(ScrollTrigger);

let horizontalRevealTexts = gsap.utils.toArray(".horizontal-text-reveal");
horizontalRevealTexts.forEach((text) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 95%",
            end: "center center",
            scrub: 0.25,
            // markers: true
        },
        backgroundPositionX: "-100%",
        x: 30        
    });
});

let verticalRevealText = gsap.utils.toArray(".vertical-reveal-text");

verticalRevealText = gsap.utils.toArray(".vertical-reveal-text span");

verticalRevealText.forEach((line) => {
    gsap.from(line, {
        scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play pause resume reset",
            // markers: true
        },
        yPercent: 110,
    });
});

