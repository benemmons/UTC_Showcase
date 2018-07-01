
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation'), // Required
    path: "assets/animation/data.json",
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    })

document.getElementById('animation').onclick = function(){
    animation.goToAndPlay(0, 0)
}