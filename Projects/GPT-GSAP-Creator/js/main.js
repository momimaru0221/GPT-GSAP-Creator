document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,DrawSVGPlugin,ScrollSmoother,GSDevTools,InertiaPlugin,MorphSVGPlugin,MotionPathHelper,Physics2DPlugin,PhysicsPropsPlugin,ScrambleTextPlugin,SplitText,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle)
    // gsap code here!
    var morph = gsap.to("#takoyaki", { duration: 5, morphSVG:"#octopus", repeat:1, yoyo:true, repeatDelay:0.2})
    document.getElementById("play").onclick = function(){
        morph.restart(true);
    }
});