gsap.registerPlugin(ScrollTrigger);

gsap.from("#blogtext > h2", {
	skewX: -30,
	opacity: 0,
	scale: 0.8,
	y: 50,
	duration: 0.75,
})

const blogs = gsap.utils.toArray(".blog");

blogs.forEach((blog) => {
	gsap.from(blog, {
		x: ()=> window.innerWidth*0.8,
		opacity: 0,
		duration: 0.25,
		scrollTrigger: {
			trigger: blog,
			toggleActions: "play complete restart reset",
			start: "top bottom",
		},
	});
});
