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
        onUpdate: toggleBoxContent
    },
    width: "80vw",
    height: "80vh",
});

gsap.from(".section-club-desc h3", {
        scrollTrigger: {
            trigger: ".section-club-desc h3",
            start: "top 65%",
            end: "top 20%",
            scrub: 1,
            onUpdate: showDesc
        },
        opacity:0,
        backgroundPositionX: "-15.5%",
    });


function showDesc(obj) {
    if (obj.progress>0.9) {
        gsap.to(".club-desc", {
            opacity: 1
        });
    }
    else {
        gsap.to(".club-desc", {
            opacity: 0
        });
    }
}

function toggleBoxContent(obj) {
    let title = document.querySelector(".section-club-desc h3");
    let description = document.querySelector(".club-desc");
    let box = document.querySelector(".section-club-desc>div");
    if (obj.progress > 0.4) {
        box.classList.remove("scrolldown-box");
        box.classList.add("club-desc-box");
        title.style.display = "inline-block";
        description.style.display = "inline-block";
    }
    else {
        box.classList.remove("club-desc-box");
        box.classList.add("scrolldown-box");
        title.style.display = "none";
        description.style.display = "none";
    }
}