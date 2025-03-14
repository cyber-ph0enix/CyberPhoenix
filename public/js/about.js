gsap.registerPlugin(ScrollTrigger, Flip, Text);


// ----------------- Global animations

let horizontalRevealTexts = gsap.utils.toArray(".horizontal-text-reveal");
horizontalRevealTexts.forEach((text) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 95%",
            end: "center center",
            scrub: 0.25
        },
        backgroundPositionX: "-100%",
        x: 30        
    });
});

let verticalRevealText = gsap.utils.toArray(".vertical-reveal-text");

verticalRevealText.forEach((line) => {
    line.innerHTML = `<span style="display: inline-block">${line.innerHTML}</span>`;
});

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

//  ------------- Introduction Section

let timelineFirst = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: "power1.inOut",
        filter: "blur(5px)",
        opacity: 0,
        y: 40,
        skewX: "-80deg"
    }
});

timelineFirst.from(".club-name", {})
    .from(".club-tagline span", {});
