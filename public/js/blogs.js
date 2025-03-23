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

let mm = gsap.matchMedia();
mm.add("(max-width: 900px)", () => {
    const menu = document.querySelector(".nav-element");
    const hamburger = document.querySelector(".hamburger");

    const tl2 = new gsap.timeline({ paused: true });
    tl2.to(menu, {
        height: "auto",
        position: "relative",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
    });

    let menuOpen = false;
    hamburger.addEventListener("click", () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            tl2.play();
        } else {
            tl2.reverse();
        }
    });
});
