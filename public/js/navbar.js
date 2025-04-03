let mmNav = gsap.matchMedia();

mmNav.add("(max-width: 900px)", () => {
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
