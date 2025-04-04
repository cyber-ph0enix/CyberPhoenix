const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

tl.from(".section1-head .wrapper-span", {
    y: 50,
    opacity: 0,
    transform: "skewX(-80deg)",
    filter: "blur(5px)",
    duration: 0.5,
});
tl.from(".section1-head .span-3", {
    y: 50,
    opacity: 0,
    transform: "skewX(-80deg)",
    filter: "blur(5px)",
    duration: 0.5,
})
tl.from(".section1 h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
});

// -------------------- section 2 ------------------------
tl.from(".section2-part1 h1 .span-1", {
    x: 100,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section2-part1 h1 .span-1",
        scroller: "body",
        start: "top bottom",
        end: "center center",
        scrub: true,
    },
});
tl.from(".section2-part1 h1 .span-2", {
    x: 30,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section2-part1 h1 .span-2",
        scroller: "body",
        start: "top bottom",
        scrub: true,
        end: "center center"
    },
});

tl.to(".para-1 .line span", {
    transform: "translateY(0)",
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".para-1 .line span",
        end: "top 35%",
        scrub: true,
    },
});
tl.from(".para-2", {
    y: 70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section2-part2 .para-2",
        scrub: true,
        end: "top center"
    },
});
tl.from(".section2-part2 button", {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section2-part2 button",
        scrub: true,
        end: "top center"
    },
});

// --------------------- section 3 head ---------------------------
tl.from(".section3-head h1 .span-1", {
    x: 100,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section3-head h1 .span-2",
        scroller: "body",
        start: "top bottom",
        end: "top 25%",
        scrub: true,
    },
});
tl.from(".section3-head h1 .span-2", {
    x: 30,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section3-head h1 .span-2",
        scroller: "body",
        start: "top bottom",
        end: "top 25%",
        scrub: true,
    },
});
tl.to(".section3-head h3 .line span", {
    transform: "translateY(0)",
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".section3-head h3 .line span",
        end: "top 35%",
        scrub: true,
    },
});

// -------------------- section 3 elements ------------------------

tl.from(".section3-elements .el1 .element-content", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".section3-elements .el1 .element-content",
        scrub: true,
        start: "top bottom",
        end: "top 25%",
    },
});
tl.from(".section3-elements .el1 img", {
    opacity: 0,
    x: 400,
    rotation: 5,
    duration: 1,
    scrollTrigger: {
        trigger: ".section3-elements .el1 img",
        scrub: true,
        start: "top bottom",
        end: "top 25%",
    },
});
tl.from(".section3-elements .el2 .element-content", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".section3-elements .el2 .element-content",
        scrub: true,
        start: "top bottom",
        end: "top 25%",
    },
});
tl.from(".section3-elements .el2 img", {
    opacity: 0,
    x: -400,
    rotation: -5,
    duration: 1,
    scrollTrigger: {
        trigger: ".section3-elements .el2 img",
        scrub: true,
        start: "top bottom",
        end: "top 25%",
    },
});
tl.from(".section3-elements .el3 .element-content", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".section3-elements .el3 .element-content",
        scrub: true,
        start: "top bottom",
        end: "top 25%",
    },
});
tl.from(".section3-elements .el3 img", {
    opacity: 0,
    x: 400,
    rotation: 5,
    duration: 1,
    scrollTrigger: {
        trigger: ".section3-elements .el3 img",
        scrub: true,
        start: "top bottom",
        end: "top 25%",
    },
});

// ------------------ section 4 -------------------
tl.from(".section4-part1 h1 .span-1", {
    x: 100,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section4-part1 h1 .span-2",
        scroller: "body",
        start: "top bottom",
        end: "top 25%",
        scrub: true,
    },
});
tl.from(".section4-part1 h1 .span-2", {
    x: 30,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section4-part1 h1 .span-2",
        scroller: "body",
        start: "top bottom",
        end: "top 25%",
        scrub: true,
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
        start: "top bottom",
        end: "top 40%",
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
        tart: "top bottom",
        end: "top 40%",
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
        tart: "top bottom",
        end: "top 40%",
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
        tart: "top bottom",
        end: "top 40%",
    },
});

// -------------------- section 5 --------------------
tl.from(".section5-head .span-1", {
    x: 100,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section5-head .span-2",
        scroller: "body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
});
tl.from(".section5-head .span-2", {
    x: 30,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section5-head .span-2",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    },
});
tl.from(".section5-head .span-3", {
    x: 30,
    backgroundPositionX: "-30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section5-head .span-3",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
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
