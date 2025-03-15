gsap.registerPlugin(ScrollTrigger);

// ----------------- Global animations

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


//  ------------ goals animation

// let goalSection = document.querySelector(".section-goals");
// let goal = document.querySelector(".goal-item");
// console.dir(goalSection);
// gsap.set(goalSection, {
//     height: ()=> {return `${goal.style.offsetWidth*5}px`;}
// });

gsap.to(".goals-list", {
    scrollTrigger: {
        trigger: ".goal-pin-container",
        start: "top 20%",
        pin: true,
        scrub: true,
        // markers: true
    },
    xPercent: -100
})

//  --------- team section

document.querySelectorAll(".member").forEach((member) => {
    member.addEventListener("mouseenter", () => {
        gsap.to(member, {
            width: "45vw",
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
            width: "35vw",
            duration: 0.7,
            ease: "power2.inOut",
        });
        gsap.to(".member", {
            opacity: 1,
            duration: 0.7,
        });
    });
});