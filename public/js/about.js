gsap.registerPlugin(ScrollTrigger, Flip, Text);

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
    .from(".word", {});


//  ------------- Description Section

// box animation
gsap.to(".scrolldown-box", {
    scrollTrigger: {
        trigger: ".section-club-desc",
        start: "top bottom",
        end: "top top",
        scrub: 0.1,
        onUpdate: toggleBoxContent,
        // markers: true
    },
    width: "80vw",
    height: "60vh",
});

function toggleBoxContent(obj) {
    let title = document.querySelector(".section-club-desc h3");
    let description = document.querySelector(".desc-container");
    if (obj.progress > 0.1) {
        title.style.display = "flex";
        description.style.display = "initial";
    }
    else {
        title.style.display = "none";
        description.style.display = "none";
    }
    let box = document.querySelector(".section-club-desc>div");
    showDesc(obj);
    if (obj.progress == 1) {
        box.style.position = "static";
    }
    else {
        box.style.position = "fixed";
    }
}
function showDesc(obj) {
    if (obj.progress>0.98) {
        gsap.to(".club-desc", {
            transform: "translateY(0)"
        });
    }
    else {
        gsap.to(".club-desc", {
            yPercent: 100
        });
    }
}

// title animation
gsap.from(".section-club-desc .horizontal-text-reveal", {
        scrollTrigger: {
            trigger: ".section-club-desc h3",
            start: "top 65%",
            end: "top top",
            scrub: 0.1,
            // markers: true
        },
        opacity:0,
        backgroundPositionX: "-15.5%",
    });



//  ------------- Goal Section
let heading = gsap.utils.toArray(".goals-heading span")
heading.forEach((word) => {
    gsap.from(word, {
        scrollTrigger: {
            trigger: word,
            start: "top bottom-=7.5%",
            end: "bottom center",
            scrub: 0.1,
        },
        backgroundPositionX: "-20%",
    })
})

let goal = gsap.utils.toArray(".goal-item");
goal.forEach((goal) => {
    gsap.to(goal, {
        scrollTrigger: {
            trigger: "goals-list",
            pin: true,
            start: "top 10%",
            scrub: true,
            markers: true,
        },
        xPercent: -100,
    });
});

