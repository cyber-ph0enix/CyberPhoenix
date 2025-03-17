const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

// ---------------- section 1
tl.from(".section1-head h1 span", {
    y: 50,
    opacity: 0,
    transform: "skewX(-80deg)",
    filter: "blur(5px)",
    duration: 0.5,
    stagger: 0.4,
});
tl.from(".section1 h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
});

let horizontalRevealTexts = gsap.utils.toArray(".horizontal-text-reveal");
horizontalRevealTexts.forEach((text) => {
    tl.from(text, {
        x: 100,
        backgroundPositionX: "-46.5%",
        duration: 1,
        scrollTrigger: {
            trigger: text,
            scroller: "body",
            start: "top 95%",
            end: "center center",
            scrub: true,
        },
    });
});
const verticalRevealText = gsap.utils.toArray(".vertical-reveal-text .line span");

verticalRevealText.forEach((line) => {
    tl.to(line, {
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
            trigger: line,
            // end: "top 30%",
            scrub: true,
        },
    });
});

mm.add("(min-width: 1000px)", () => {
    gsap.to(".boxes-wrapper .section3-boxes", {
        transform: "translateX(-200%)",
        scrollTrigger: {
            trigger: ".boxes-wrapper",
            scroller: "body",
            markers: true,
            start: "top 20%",
            scrub: 2,
            pin: true,
        },
    });
});

tl.from(".section4-head h3 .span-1", {
    x: 100,
    backgroundPositionX: "-26.5%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section4-head h3 .span-1",
        scroller: "body",
        start: "top 95%",
        end: "center center",
        scrub: true,
    },
});
tl.from(".section4-head h3 .span-2", {
    x: 100,
    backgroundPositionX: "-26.5%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section4-head h3 .span-2",
        scroller: "body",
        start: "top 95%",
        end: "center center",
        scrub: true,
    },
});

//  --------- team section

document.querySelectorAll(".member").forEach((member) => {
    member.addEventListener("mouseenter", () => {
        gsap.to(member, {
            width: "50vw",
            duration: 0.7,
            ease: "power2.out",
        });
        gsap.to(".member", {
            opacity: 0.3,
            duration: 0.7,
            ease: "power2.out",
        });
        gsap.to(member, {
            opacity: 1,
            duration: 0.7,
        });
    });

    member.addEventListener("mouseleave", () => {
        gsap.to(member, {
            width: "40vw",
            duration: 0.7,
            ease: "power2.inOut",
        });
        gsap.to(".member", {
            opacity: 1,
            duration: 0.7,
        });
    });
});
