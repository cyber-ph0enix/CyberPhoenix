gsap.registerPlugin(ScrollTrigger, Flip, Text);

let clubDescription = 
            `CyberPhoenix is a club under the CSE department of Guru Jambheshwar
			University of Science & Technology. We are a group of cybersecurity
			enthusiasts who aspire to create a secure digital environment for
			everyone but for now we are initiating that dream by making our
			university aware!`;

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

gsap.to(".section-club-description", {
    scrollTrigger: {
        trigger: ".scrolldown-box",
        start: "top bottom-=10.1%",
        scrub: true
    },
    width: "100vw",
    height: "100vh"
});
gsap.to(".scrolldown-box", {
    scrollTrigger: {
        trigger: ".scrolldown-box",
        start: "top bottom-=10.1%",
        scrub: true
    },
    width: "90vw",
    height: "90vh"
});