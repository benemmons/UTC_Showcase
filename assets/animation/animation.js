$(document).ready(function () {
    var on_load_anim = bodymovin.loadAnimation({
        container: document.getElementById('animation'), // Required
        path: "assets/animation/on_load.json",
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: true, // Optional
    })

    action = true;
    document.getElementById('animation').onclick = function () {
        // True == Up, False == Down
        action = !(action)
        if (action == true) {
            var up_anim = bodymovin.loadAnimation({
                container: document.getElementById('animation'), // Required
                path: "assets/animation/up.json",
                renderer: 'svg', // Required
                loop: false, // Optional
                autoplay: true, // Optional
            })

            document.getElementById('animation').innerHTML = ""
            up_anim.play()
            sort("Newest")
        }
        if (action == false) {
            var down_anim = bodymovin.loadAnimation({
                container: document.getElementById('animation'), // Required
                path: "assets/animation/down.json",
                renderer: 'svg', // Required
                loop: false, // Optional
                autoplay: true, // Optional
            })

            document.getElementById('animation').innerHTML = ""
            down_anim.play()
            sort("Oldest")
        }
    }
});