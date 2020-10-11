const particlesSettings = {
"particles": {
    "number": {
    "value": 80,
    "density": {
        "enable": true,
        "value_area": 2000
    }
    },
    "color": {
    "value": "#ffffff"
    },
    "shape": {
    "type": "circle",
    "stroke": {
        "width": 0,
        "color": "#000000"
    },
    "polygon": {
        "nb_sides": 5
    },
    "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
    }
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
    }
    },
    "size": {
    "value": 5,
    "random": true,
    "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
    }
    },
    "line_linked": {
    "enable": true,
    "distance": 200,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
    },
    "move": {
    "enable": true,
    "speed": 7,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
    }
    }
},
"interactivity": {
    "detect_on": "window",
    "events": {
    "onhover": {
        "enable": true,
        "mode": "repulse"
    },
    "onclick": {
        "enable": true,
        "mode": "repulse"
    },
    "resize": true
    },
    "modes": {
    "grab": {
        "distance": 400,
        "line_linked": {
        "opacity": 1
        }
    },
    "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
    },
    "repulse": {
        "distance": 200,
        "duration": 0.4
    },
    "push": {
        "particles_nb": 4
    },
    "remove": {
        "particles_nb": 2
    }
    }
},
"retina_detect": true
};

particlesJS('particles', particlesSettings);
/*
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translatex(${x}px) translatey(${y}px)`
    });
};
*/
