gsap.registerPlugin(ScrollTrigger, Flip, Text);

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
    .from(".word", {stagger: 0.25});

gsap.to(".section-club-desc", {
    scrollTrigger: {
        trigger: ".scrolldown-box",
        start: "top bottom-=10.05%",
        scrub: true
    },
    width: "100vw",
    height: "100vh"
});
gsap.to(".scrolldown-box", {
    scrollTrigger: {
        trigger: ".scrolldown-box",
        start: "top bottom-=10.05%",
        end: "center 25%",
        scrub: 1,
        // onToggle: toggleBoxContent,
        onUpdate: toggleBoxContent
    },
    width: "80vw",
    height: "80vh",
    // onComplete: showText,
});

// function removeText() {
//     box.
// }

function toggleBoxContent(obj) {
    let title = document.querySelector(".section-club-desc h3");
    let description = document.querySelector(".club-desc");
    let box = document.querySelector(".section-club-desc>div");
    console.log(obj.progress);
    if (obj.progress > 0.4) {
        box.classList.remove("scrolldown-box");
        box.classList.add("club-desc-box");
        title.style.display = "initial";
        description.style.display = "initial";
    }
    else {
        box.classList.remove("club-desc-box");
        box.classList.add("scrolldown-box");
        title.style.display = "none";
        description.style.display = "none";
    }
}