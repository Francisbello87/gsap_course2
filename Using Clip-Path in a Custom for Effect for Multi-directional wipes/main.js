// For the Image
// gsap.set("img", {clipPath:"polygon(0px 0px, 500px 0px, 500px 333px, 0px 333px"})

// gsap.to("img", {clipPath: "polygon(120px 0px, 680px 0px, 680px 300px,  120px 300px)"})

gsap.registerEffect({
  name: "clip",
  defaults: {
    duration: 1,
    ease: "power1.in",
    direction: "full",
  },
  extendTimeline: true,
  effect: function (targets, config) {
    // Mapping for different coordinates animation
    let coords = {
      top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      midX: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      midY: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      center: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      lowerRight: "polygon(0% 0%, 100% 0%, 0% 0%, 100% 100%)",
    };

    console.log(window.getComputedStyle(targets[0]).clipPath);

    if (window.getComputedStyle(targets[0]).clipPath != "none") {
      console.log("has a clipPath");
    } else {
      console.log("does not a clipPath");
      gsap.set(targets, { clipPath: coords["full"] });
    }

    let animation = gsap.timeline().to(targets, {
      clipPath: coords[config.coords],
      duration: config.duration,
      ease: config.ease,
    });
    return animation;
  },
});

// for the Happy birthday
// gsap.set(".clipped", { clipPath: coords.full });
let target = document.querySelector(".clipped");
let animation = gsap
  .timeline()
  .clip(target, { coords: "right" })
  .clip(target,{ coords: "full" })
  .clip(target, { coords: "left" })
  .clip(target, { coords: "full" })
  .clip(target, { coords: "center" })
  .clip(target, { coords: "full" })
  .clip(target, { coords: "lowerRight" });

