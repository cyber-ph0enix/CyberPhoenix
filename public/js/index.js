const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.from(".head-part1", {
    y: 50,
    opacity: 0,
    transform: "skewX(-80deg)",
    filter: "blur(5px)",
    duration: 0.5,
    stagger: 0.1,
});
tl.from(".head-part2", {
    y: 50,
    opacity: 0,
    filter: "blur(5px)",
    transform: "skewX(-40deg)",
    duration: 0.5,
    stagger: 0.1,
});
tl.from(".section1 h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
});

// -------------------- section 3 elements ------------------------
tl.from(".el1 img", {
    opacity: 0,
    rotation: 10,
    x: 100,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".el1 img",
        scrub: true,
        start: "top 80%",
    },
});
tl.from(".el2 img", {
    opacity: 0,
    rotation: -10,
    x: -100,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".el2 img",
        scrub: true,
        start: "top 80%",
    },
});
tl.from(".el3 img", {
    opacity: 0,
    rotation: 10,
    x: 100,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".el3 img",
        scrub: true,
        start: "top 80%",
    },
});

// ------------------ events ----------------
tl.from(".event-1", {
    rotation: -10,
    duration: 1,
    x: -100,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".event-1, .event-3",
        // markers: true,
        scrub: true,
        start: "top 80%",
        end: "bottom 50%",
    },
});
tl.from(".event-2", {
    rotation: 10,
    duration: 1,
    x: 100,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".event-2",
        // markers: true,
        scrub: true,
        start: "top 80%",
        end: "bottom 60%",
    },
});
tl.from(".event-3", {
    rotation: -10,
    duration: 1,
    x: -100,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".event-3",
        // markers: true,
        scrub: true,
        start: "top 80%",
        end: "bottom 70%",
    },
});
tl.from(".event-4", {
    rotation: 10,
    duration: 1,
    x: 100,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".event-4",
        // markers: true,
        scrub: true,
        start: "top 80%",
        end: "bottom 80%",
    },
});

// ------------------- social-links -------------------
document.querySelectorAll(".social").forEach((social) => {
    social.addEventListener("mouseenter", () => {
        gsap.to(social, {
            width: "45vw",
            duration: 0.7,
            ease: "power2.out",
        });
        gsap.to(".social", {
            opacity: 0.3,
            duration: 0.7,
            ease: "power2.out",
        });
        gsap.to(social, {
            opacity: 1,
            duration: 0.7,
        });
    });

    social.addEventListener("mouseleave", () => {
        gsap.to(social, {
            width: "35vw",
            duration: 0.7,
            ease: "power2.inOut",
        });
        gsap.to(".social", {
            opacity: 1,
            duration: 0.7,
        });
    });
});

// ------------------------- expand navbar -----------------------

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
