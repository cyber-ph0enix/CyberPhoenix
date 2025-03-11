gsap.registerPlugin(ScrollTrigger);

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
