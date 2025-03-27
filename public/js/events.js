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
    duration: 0.5,
});

let verticalRevealEle = gsap.utils.toArray(".vertical-reveal");
verticalRevealEle.forEach((ele) => {
    gsap.to(ele, {
        transform: "translateY(0)",
        duration: 2,
        scrollTrigger: {
            trigger: ele,
            start: "top bottom",
            end: "bottom 65%",
            scrub: true,
        },
    });
});

let keywords = gsap.utils.toArray(".keywords h5");
keywords.forEach((kw) => {
    gsap.from(kw, {
        opacity: 0,
        y: "40",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: kw,
            scrub: true,
            end: "bottom 65%",
        },
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
