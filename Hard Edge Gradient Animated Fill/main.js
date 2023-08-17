const animate = gsap.to("li", {
  backgroundImage: "linear-gradient(90deg, var(--left) 0%, var(--left) 100%, var(--right)",
  duration: 0.3,
  ease: "power1",
  stagger: {
    each: 0.1,
    ease: "power2.out",
  },
});
