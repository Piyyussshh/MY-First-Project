var tl = gsap.timeline({
    repeat: -1
});





tl
    .to(".imagecontainer", {
        ease: Expo.easeInOut,
        width: "100%",
        duration: 1,
        stagger: 3
    }, 'a')

.to(".text h1", {
    delay: 1,
    ease: Expo.easeInOut,
    duration: 3,
    stagger: 3,
    top: "-100%"
}, 'a') - + -.0