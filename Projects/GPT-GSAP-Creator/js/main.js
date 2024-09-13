function morphImages() {
    const image1 = document.getElementById('image1');
    const shape1 = document.getElementById('shape1');
    const image2 = document.getElementById('image2');
    const shape2 = document.getElementById('shape2');

    gsap.timeline()
      .to(shape1, { morphSVG: shape2, duration: 1 })
      .to(image1, { opacity: 0, duration: 0.5 }, "-=1")
      .to(image2, { opacity: 1, duration: 0.5 });
}

// ページ読み込み後にアニメーションを実行
window.onload = function() {
    morphImages();
};