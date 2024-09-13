function morphImages(image1, shape1, shape2, image2) {
    gsap.timeline()
      .to(shape1, { morphSVG: shape2, duration: 1 })
      .to(image1, { opacity: 0, duration: 0.5 }, "-=1")
      .to(image2, { opacity: 1, duration: 0.5 });
}